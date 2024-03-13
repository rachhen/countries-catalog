import { useCountryContext } from "~/contexts/country";
import { CountryItem } from "./country-item";
import { CountryEmpty } from "./country-empty";

export default function CountryList() {
  const { countries } = useCountryContext();

  if (countries.length === 0) {
    return <CountryEmpty />;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {countries.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </div>
  );
}
