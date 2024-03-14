import { useCountries } from "~/hooks/use-country";
import { SearchBox } from "./search-box";
import { CountryList } from "./country-list";
import { CountryProvider } from "~/contexts/country";
import { CountryLoading } from "./country-loading";
import { CountryPagination } from "./country-pagination";
import { DisplayError } from "../display-error";

export function Countries() {
  const { data, isLoading, error } = useCountries();

  if (isLoading) {
    return <CountryLoading />;
  }

  if (error) {
    return <DisplayError message={error.message} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="container">
      <CountryProvider data={data}>
        <SearchBox />
        <CountryList />
        <CountryPagination />
      </CountryProvider>
    </div>
  );
}
