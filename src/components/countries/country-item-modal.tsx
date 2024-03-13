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
      <DialogContent className="max-w-4xl max-h-screen overflow-x-auto">
        <DialogHeader>
          <DialogTitle>{item.name.official}</DialogTitle>
          <div className="flex pt-4 gap-4">
            <div className="flex flex-1 flex-col">
              <CountryItemModalNames item={item} />
              <CountryItemModalCodes item={item} />
            </div>
            <div className="flex flex-1 flex-col">
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="w-full h-56 object-cover pb-4"
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
