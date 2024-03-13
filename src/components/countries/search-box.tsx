import { useCountryContext } from "~/contexts/country";
import { Input } from "../ui/input";
import SearchBoxSortButton from "./search-box-sort-button";

export function SearchBox() {
  const { onSearch } = useCountryContext();

  return (
    <div className="py-4">
      <h2 className="pb-3 text-3xl">Search for a country</h2>
      <div className="flex gap-4">
        <Input onChange={(e) => onSearch(e.target.value)} />
        <SearchBoxSortButton />
      </div>
    </div>
  );
}
