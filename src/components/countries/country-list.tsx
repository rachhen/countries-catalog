import { useCountryContext } from "~/contexts/country";
import { CountryItem } from "./country-item";
import { CountryEmpty } from "./country-empty";

export function CountryList() {
  const { countries } = useCountryContext();

  if (countries.length === 0) {
    return <CountryEmpty />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {countries.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </div>
  );
}
