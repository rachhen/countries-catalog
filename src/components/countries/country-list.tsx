import { useCountryContext } from "~/contexts/country";
import { CountryItem } from "./country-item";

export default function CountryList() {
  const { countries } = useCountryContext();

  return (
    <div className="grid grid-cols-5 gap-4">
      {countries.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </div>
  );
}
