import { useCountryContext } from "~/contexts/country";
import { Input } from "../ui/input";

export function SearchBox() {
  const { onSearch } = useCountryContext();

  return (
    <div className="py-4">
      <h2 className="text-3xl pb-3">Search for a country</h2>
      <Input onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
}
