import { Country } from "~/types/country";
import CountryItemModal from "./country-item-modal";
import { CountryItemContent } from "./country-item-content";

type CountryItemProps = {
  item: Country;
};

export function CountryItem({ item }: CountryItemProps) {
  return (
    <a href="#">
      <div className="border rounded-md">
        <div className="px-2 pt-2 border-b">
          <img
            src={item.flags.png}
            alt={item.flags.alt}
            className="rounded-md w-full h-24 object-cover"
          />
          <h3 className="text-lg font-semibold py-2">{item.name.official}</h3>
        </div>
        <CountryItemContent item={item} />
        <CountryItemModal />
      </div>
    </a>
  );
}
