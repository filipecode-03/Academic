import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nortea Digital",
    short_name: "Nortea",
    description: "Tecnologia que dá direção ao seu negócio.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F5F0",
    theme_color: "#123D2E",
    lang: "pt-BR",
  };
}
