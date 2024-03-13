import { createContext, useContext, useState } from "react";

import { Country } from "../types/country";

export type SortBy = "asc" | "desc";

type CountryContextType = {
  countries: Country[];
  onSearch: (value: string) => void;
  onSort: (sort: SortBy) => void;
};

const CountryContext = createContext<CountryContextType | undefined>({
  countries: [],
  onSearch: () => {},
  onSort: () => {},
});

type CountryProviderProps = {
  children: React.ReactNode;
  data: Country[];
};

export function CountryProvider({ children, data }: CountryProviderProps) {
  const [countries, setCountries] = useState<Country[]>(data);

  function onSearch(value: string) {
    if (value === "") {
      return;
    }

    const filteredCountries = data.filter((country) =>
      country.name.official.toLowerCase().includes(value.toLowerCase())
    );

    setCountries(filteredCountries);
  }

  function onSort(sort: SortBy) {
    const sortedCountries = countries.sort((a, b) => {
      if (sort === "asc") {
        return a.name.official.localeCompare(b.name.official);
      }

      return b.name.official.localeCompare(a.name.official);
    });

    setCountries([...sortedCountries]);
  }

  return (
    <CountryContext.Provider value={{ countries, onSearch, onSort }}>
      {children}
    </CountryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => {
  const context = useContext(CountryContext);

  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }

  return context;
};
