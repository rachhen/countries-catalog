import { useState } from "react";

import { convertNativeNameToArray } from "~/lib/country";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import { Country } from "~/types/country";

type CountryItemModalNamesProps = {
  item: Country;
};
export function CountryItemModalNames({ item }: CountryItemModalNamesProps) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <h2 className="text-xl pb-1 font-semibold text-card-foreground">Names</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>Common</TableHead>
            <TableCell className="min-w-64">{item.name.common}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Official</TableHead>
            <TableCell>{item.name.official}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Common (Native) </TableHead>
            <TableCell>
              {convertNativeNameToArray(item.name.nativeName)
                .map(({ value }) => value.common)
                .join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Official (Native)</TableHead>
            <TableCell>
              {convertNativeNameToArray(item.name.nativeName)
                .map(({ value }) => value.official)
                .join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Alternative spellings</TableHead>
            <TableCell>{item.altSpellings.join(", ")}</TableCell>
          </TableRow>
          <TableRow
            className="cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <TableHead>Translations</TableHead>
            <TableCell className="flex justify-end">
              {active ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {active && <Translations item={item} />}
    </div>
  );
}

function Translations({ item }: CountryItemModalNamesProps) {
  return (
    <Table className="border-t-0">
      <TableBody>
        {Object.entries(item.translations).map(([key, value]) => (
          <TableRow key={key}>
            <TableHead>{key}</TableHead>
            <TableCell className="min-w-64">{value.common}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
