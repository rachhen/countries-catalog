import { convertNativeNameToArray } from "~/lib/country";
import { cn } from "~/lib/utils";
import { Country } from "~/types/country";

type CountryItemProps = {
  item: Country;
};

export function CountryItem({ item }: CountryItemProps) {
  const nativeName = convertNativeNameToArray(item.name.nativeName)
    .map(({ value }) => value.common)
    .join(", ");

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
        <div className="text-sm text-foreground/70">
          <ContentRow label="Country Code (Alpha 2)">
            <span>{item.cca2}</span>
          </ContentRow>
          <ContentRow label="Country Code (Alpha 3)">
            <span>{item.cca3}</span>
          </ContentRow>
          <ContentRow className="gap-1 items-start" label="Native">
            <span className="flex flex-1">{nativeName}</span>
          </ContentRow>
          <ContentRow className="gap-1 items-start" label="Spelling">
            <span className="flex flex-1">{item.altSpellings.join(", ")}</span>
          </ContentRow>
        </div>
      </div>
    </a>
  );
}

type ContentRowProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
};
function ContentRow({ className, label, children, ...props }: ContentRowProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center border-b p-2",
        className
      )}
      {...props}
    >
      <span>{label}:</span>
      {children}
    </div>
  );
}
