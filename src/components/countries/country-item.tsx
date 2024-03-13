import { useState } from "react";

import { Country } from "~/types/country";
import { CountryItemModal } from "./country-item-modal";
import { CountryItemContent } from "./country-item-content";

type CountryItemProps = {
  item: Country;
};

export function CountryItem({ item }: CountryItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border">
      <div className="border-b px-2 pt-2">
        <img
          src={item.flags.png}
          alt={item.flags.alt}
          className="h-24 w-full rounded-md object-cover"
        />
        <h3
          className="cursor-pointer py-2 text-lg font-semibold hover:underline"
          onClick={() => setIsOpen(true)}
        >
          {item.name.official}
        </h3>
      </div>
      <CountryItemContent item={item} />
      <CountryItemModal item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
