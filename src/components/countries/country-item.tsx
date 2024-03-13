import { Country } from "~/types/country";

type CountryItemProps = {
  item: Country;
};

export function CountryItem({ item }: CountryItemProps) {
  return (
    <a href="#">
      <div className="border rounded-md">
        <div className="px-3 pt-3">
          <img
            src={item.flags.png}
            alt={item.flags.alt}
            className="rounded-md w-full h-24 object-cover"
          />
          <h3 className="text-lg font-semibold">{item.name.official}</h3>
        </div>
        <div className="px-3 pb-3 text-sm text-foreground/70">
          <div className="flex justify-between items-center">
            <strong>Country Code:</strong>
            <span>
              {item.cca2} and {item.cca3}
            </span>
          </div>
          <p>Native Name:</p>
        </div>
      </div>
    </a>
  );
}
