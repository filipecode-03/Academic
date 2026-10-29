import Image from "next/image";
import Link from "next/link";
import type { Country } from "../types/country";

const numberFormat = new Intl.NumberFormat("en-US");

export function CountryCard({ country, eager = false }: { country: Country; eager?: boolean }) {
  return (
    <article className="country-card">
      <Link href={`/country/${country.alpha3Code.toLowerCase()}`} aria-label={`View details for ${country.name}`}>
        <div className="card-flag">
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(max-width: 767px) 264px, (max-width: 1100px) 30vw, 264px"
          />
        </div>
        <div className="card-content">
          <h2>{country.name}</h2>
          <dl>
            <div>
              <dt>Population:</dt>
              <dd>{numberFormat.format(country.population)}</dd>
            </div>
            <div>
              <dt>Region:</dt>
              <dd>{country.region}</dd>
            </div>
            <div>
              <dt>Capital:</dt>
              <dd>{country.capital || "—"}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
