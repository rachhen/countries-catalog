import { Country } from "~/types/country";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

type CountryItemModalCodesProps = {
  item: Country;
};

export function CountryItemModalCodes({ item }: CountryItemModalCodesProps) {
  return (
    <div className="pt-4">
      <h2 className="pb-1 text-xl font-semibold text-card-foreground">Codes</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>ISO 3166-1 alpha-2</TableHead>
            <TableCell className="text-center">{item.cca2}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 3166-1 alpha-3</TableHead>
            <TableCell className="text-center">{item.cca3}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 3166-1 numeric</TableHead>
            <TableCell className="text-center">{item.ccn3}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="w-full">International calling code</TableHead>
            <TableCell className="text-center">
              <span className="block min-w-24">{`${item.idd.root}${item.idd.suffixes}`}</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 4217 currency code</TableHead>
            <TableCell className="text-center">
              {Object.entries(item.currencies)
                .map(([key]) => key)
                .join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Top level domain</TableHead>
            <TableCell className="text-center">{item.tld}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
