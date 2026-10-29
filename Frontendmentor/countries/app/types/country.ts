export type Country = {
  name: string;
  nativeName?: string;
  alpha2Code: string;
  alpha3Code: string;
  population: number;
  region: string;
  subregion?: string;
  capital?: string;
  topLevelDomain?: string[];
  borders?: string[];
  flags: { svg: string; png: string };
  currencies?: Array<{ code: string; name: string; symbol?: string }>;
  languages?: Array<{ name: string; nativeName?: string }>;
};
