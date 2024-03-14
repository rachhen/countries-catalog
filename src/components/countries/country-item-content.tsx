import { useMemo } from "react";

import { Country } from "~/types/country";
import { CountryContentRow } from "./country-content-row";
import { convertNativeNameToArray } from "~/lib/country";
import { truncateString } from "~/lib/utils";

type CountryItemContentProps = {
  item: Country;
};

export const CountryItemContent = ({ item }: CountryItemContentProps) => {
  const nativeName = useMemo(
    () =>
      convertNativeNameToArray(item.name.nativeName)
        .map(({ value }) => value.common)
        .join(", "),

    [item.name.nativeName],
  );

  return (
    <div className="text-sm text-foreground/70">
      <CountryContentRow label="Country Code (Alpha 2)">
        <span>{item.cca2}</span>
      </CountryContentRow>
      <CountryContentRow label="Country Code (Alpha 3)">
        <span>{item.cca3}</span>
      </CountryContentRow>
      <CountryContentRow label="Int. dial code">
        <span>
          {truncateString(`${item.idd.root}${item.idd.suffixes?.[0]}`, 40)}
        </span>
      </CountryContentRow>
      <CountryContentRow className="items-start gap-1" label="Native">
        <span className="flex flex-1">{nativeName}</span>
      </CountryContentRow>
      <CountryContentRow
        className="items-start gap-1"
        label="Spelling"
        isSeparator={false}
      >
        <span className="flex flex-1">
          {truncateString(item.altSpellings.join(", "), 40)}
        </span>
      </CountryContentRow>
    </div>
  );
};
