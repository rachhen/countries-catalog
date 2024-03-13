import { Country } from "~/types/country";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

type CountryItemModalCodesProps = {
  item: Country;
};

export function CountryItemModalCodes({ item }: CountryItemModalCodesProps) {
  return (
    <div className="pt-4">
      <h2 className="text-xl pb-1 font-semibold text-card-foreground">Codes</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>ISO 3166-1 alpha-2</TableHead>
            <TableCell className="text-end">{item.cca2}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 3166-1 alpha-3</TableHead>
            <TableCell className="text-end">{item.cca3}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 3166-1 numeric</TableHead>
            <TableCell className="text-end">{item.ccn3}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead className="w-full">International calling code</TableHead>
            <TableCell className="text-end">{`${item.idd.root}${item.idd.suffixes}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>ISO 4217 currency code</TableHead>
            <TableCell className="text-end">
              {Object.entries(item.currencies).map(([key]) => (
                <span key={key}>{key}</span>
              ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Top level domain</TableHead>
            <TableCell className="text-end">{item.tld}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
