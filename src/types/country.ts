export interface Country {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  fifa: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: Idd;
  capital: string[];
  capitalInfo: CapitalInfo;
  altSpellings: string[];
  region: string;
  subregion: string;
  continents: string[];
  languages: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  demonyms: Record<string, Demonym>;
  flags: Flags;
  coatOfArms: CoatOfArms;
  population: number;
  maps: Maps;
  gini: Record<string, number>;
  car: Car;
  postalCode: PostalCode;
  startOfWeek: string;
  timezones: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Record<string, NativeNameItem>;
}

export interface NativeNameItem {
  official: string;
  common: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Translation {
  official: string;
  common: string;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface CoatOfArms {
  svg: string;
  png: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface PostalCode {
  format?: string;
  regex?: string;
}
