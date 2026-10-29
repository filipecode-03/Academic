"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

const regions = [
  { label: "Africa", value: "Africa" },
  { label: "America", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

type RegionFilterProps = {
  value: string;
  onChange: (region: string) => void;
};

export function RegionFilter({ value, onChange }: RegionFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedLabel = regions.find((region) => region.value === value)?.label;

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setIsOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="region-filter" ref={rootRef}>
      <button
        type="button"
        className="region-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{selectedLabel || "Filter by Region"}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className="region-menu" role="listbox" aria-label="Filter by region">
          {value && (
            <button
              type="button"
              role="option"
              aria-selected={false}
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
            >
              All regions
            </button>
          )}
          {regions.map((region) => (
            <button
              type="button"
              role="option"
              aria-selected={value === region.value}
              key={region.value}
              onClick={() => {
                onChange(region.value);
                setIsOpen(false);
              }}
            >
              {region.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
