"use client";

import { useMemo, useState } from "react";
import { CountryCard } from "./components/country-card";
import { RegionFilter } from "./components/region-filter";
import { SearchIcon } from "./components/icons";
import countriesData from "./data/data.json";
import type { Country } from "./types/country";

const countries = countriesData as Country[];
const featuredCodes = ["DEU", "USA", "BRA", "ISL"];

const orderedCountries = [...countries].sort((a, b) => {
  const aFeatured = featuredCodes.indexOf(a.alpha3Code);
  const bFeatured = featuredCodes.indexOf(b.alpha3Code);

  if (aFeatured !== -1 || bFeatured !== -1) {
    if (aFeatured === -1) return 1;
    if (bFeatured === -1) return -1;
    return aFeatured - bFeatured;
  }

  return a.name.localeCompare(b.name);
});

export default function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const visibleCountries = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();

    return orderedCountries.filter((country) => {
      const matchesSearch = country.name.toLocaleLowerCase().includes(normalizedSearch);
      const matchesRegion = !region || country.region === region;
      return matchesSearch && matchesRegion;
    });
  }, [search, region]);

  return (
    <div className="home-shell page-container">
      <section className="controls" aria-label="Country filters">
        <label className="search-field">
          <span className="sr-only">Search for a country</span>
          <SearchIcon />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for a country..."
            autoComplete="off"
          />
        </label>

        <RegionFilter value={region} onChange={setRegion} />
      </section>

      {visibleCountries.length > 0 ? (
        <section className="countries-grid" aria-label="Countries">
          {visibleCountries.map((country, index) => (
            <CountryCard key={country.alpha3Code} country={country} eager={index < 4} />
          ))}
        </section>
      ) : (
        <section className="empty-state" aria-live="polite">
          <h2>No countries found</h2>
          <p>Try another name or choose a different region.</p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setRegion("");
            }}
          >
            Clear filters
          </button>
        </section>
      )}
    </div>
  );
}
