"use client";

import { useEffect, useRef } from "react";

export function CurrentYear() {
  const yearRef = useRef<HTMLTimeElement>(null);

  useEffect(() => {
    const year = String(new Date().getFullYear());
    if (yearRef.current) {
      yearRef.current.textContent = year;
      yearRef.current.dateTime = year;
    }
  }, []);

  return <time ref={yearRef} dateTime="2026">2026</time>;
}
