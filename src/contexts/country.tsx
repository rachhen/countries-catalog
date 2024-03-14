import { createContext, useContext, useState } from "react";

import { Country } from "../types/country";
import { useCountriesPaginate } from "~/hooks/use-countries-paginate";

export type SortBy = "asc" | "desc";

type CountryContextType = {
  page: number;
  countries: Country[];
  totalItems: number;
  onSearch: (value: string) => void;
  onSort: (sort: SortBy) => void;
  onPaginate: (pageNumber: number) => void;
};

const CountryContext = createContext<CountryContextType | null>(null);

type CountryProviderProps = {
  children: React.ReactNode;
  data: Country[];
};

export function CountryProvider({ children, data }: CountryProviderProps) {
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState<Country[]>(data);
  const countriesPaginated = useCountriesPaginate(countries, page);

  function onSearch(value: string) {
    if (value === "") {
      setCountries(data);
      return;
    }

    const filteredCountries = data.filter((country) =>
      country.name.official.toLowerCase().includes(value.toLowerCase()),
    );

    setCountries(filteredCountries);
    onPaginate(1);
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

  function onPaginate(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <CountryContext.Provider
      value={{
        page,
        countries: countriesPaginated,
        totalItems: data.length,
        onSearch,
        onSort,
        onPaginate,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => {
  const context = useContext(CountryContext);

  if (context === null) {
    throw new Error("useCountry must be used within a CountryProvider");
  }

  return context;
};
