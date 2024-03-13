import { Country } from "~/types/country";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { CountryItemModalNames } from "./country-item-modal-names";
import { CountryItemModalLanguage } from "./country-item-modal-language";
import { CountryItemModalCodes } from "./country-item-modal-codes";
import { CountryItemModalGeography } from "./country-item-modal-geography";

type CountryItemModalProps = {
  isOpen: boolean;
  item: Country;
  setIsOpen: (value: boolean) => void;
};

export function CountryItemModal({
  item,
  isOpen,
  setIsOpen,
}: CountryItemModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-screen max-w-4xl overflow-x-auto">
        <DialogHeader>
          <DialogTitle>{item.name.official}</DialogTitle>
          <div className="flex flex-col gap-4 pt-4 md:flex-row">
            <div className="flex flex-1 flex-col">
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="block h-56 w-full object-cover pb-4 md:hidden"
              />
              <CountryItemModalNames item={item} />
              <CountryItemModalCodes item={item} />
            </div>
            <div className="flex flex-1 flex-col">
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="hidden h-56 w-full object-cover pb-4 md:block"
              />
              <CountryItemModalLanguage item={item} />
              <CountryItemModalGeography item={item} />
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
