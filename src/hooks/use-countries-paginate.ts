import { Country } from "~/types/country";

export const pageSize = 25;

function paginateArray(countries: Country[], pageNumber: number) {
  // Calculate the index to start from
  const startIndex = (pageNumber - 1) * pageSize;

  // Slice the array from the start index and take pageSize items
  return countries.slice(startIndex, startIndex + pageSize);
}

export function useCountriesPaginate(data: Country[], page: number) {
  const paginatedCountries = paginateArray(data, page);

  return paginatedCountries;
}
