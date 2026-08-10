"use client";

import { useState } from "react";

import Shorten from "./Shorten";
import Advanced from "./Advanced";

import type { ShortenedLink } from "./types";

function ShortenSection() {
  const [links, setLinks] = useState<ShortenedLink[]>([]);

  const addLink = (link: ShortenedLink) => {
    setLinks((currentLinks) => [link, ...currentLinks]);
  };

  return (
    <>
      <Shorten onLinkShortened={addLink} />
      <Advanced links={links} />
    </>
  );
}

export default ShortenSection;