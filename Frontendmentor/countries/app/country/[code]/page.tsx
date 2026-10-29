import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "../../components/icons";
import countriesData from "../../data/data.json";
import type { Country } from "../../types/country";

const countries = countriesData as Country[];
const numberFormat = new Intl.NumberFormat("en-US");

export function generateStaticParams() {
  return countries.map((country) => ({ code: country.alpha3Code.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps<"/country/[code]">) {
  const { code } = await params;
  const country = countries.find((item) => item.alpha3Code.toLowerCase() === code.toLowerCase());

  return {
    title: country ? `${country.name} | Where in the world?` : "Country not found",
  };
}

export default async function CountryDetails({ params }: PageProps<"/country/[code]">) {
  const { code } = await params;
  const country = countries.find((item) => item.alpha3Code.toLowerCase() === code.toLowerCase());

  if (!country) notFound();

  const borderCountries = (country.borders || [])
    .map((borderCode) => countries.find((item) => item.alpha3Code === borderCode))
    .filter((item): item is Country => Boolean(item));

  return (
    <div className="details-page page-container">
      <Link className="back-button" href="/">
        <ArrowLeftIcon />
        <span>Back</span>
      </Link>

      <article className="country-details">
        <div className="detail-flag">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            fill
            priority
            sizes="(max-width: 767px) calc(100vw - 56px), 560px"
          />
        </div>

        <div className="detail-content">
          <h1>{country.name}</h1>

          <div className="detail-columns">
            <dl>
              <div>
                <dt>Native Name:</dt>
                <dd>{country.nativeName || "—"}</dd>
              </div>
              <div>
                <dt>Population:</dt>
                <dd>{numberFormat.format(country.population)}</dd>
              </div>
              <div>
                <dt>Region:</dt>
                <dd>{country.region}</dd>
              </div>
              <div>
                <dt>Sub Region:</dt>
                <dd>{country.subregion || "—"}</dd>
              </div>
              <div>
                <dt>Capital:</dt>
                <dd>{country.capital || "—"}</dd>
              </div>
            </dl>

            <dl>
              <div>
                <dt>Top Level Domain:</dt>
                <dd>{country.topLevelDomain?.join(", ") || "—"}</dd>
              </div>
              <div>
                <dt>Currencies:</dt>
                <dd>{country.currencies?.map((currency) => currency.name).join(", ") || "—"}</dd>
              </div>
              <div>
                <dt>Languages:</dt>
                <dd>{country.languages?.map((language) => language.name).join(", ") || "—"}</dd>
              </div>
            </dl>
          </div>

          <section className="border-countries" aria-label="Border countries">
            <h2>Border Countries:</h2>
            {borderCountries.length > 0 ? (
              <div className="border-list">
                {borderCountries.map((border) => (
                  <Link key={border.alpha3Code} href={`/country/${border.alpha3Code.toLowerCase()}`}>
                    {border.name}
                  </Link>
                ))}
              </div>
            ) : (
              <p>None</p>
            )}
          </section>
        </div>
      </article>
    </div>
  );
}
