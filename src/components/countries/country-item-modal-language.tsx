import { Country } from "~/types/country";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";

type CountryItemModalLanguageProps = {
  item: Country;
};

export function CountryItemModalLanguage({
  item,
}: CountryItemModalLanguageProps) {
  return (
    <div>
      <h2 className="pb-1 text-xl font-semibold text-card-foreground">
        Languages
      </h2>
      <Table>
        <TableBody>
          {Object.entries(item.languages).map(([key, value]) => (
            <TableRow key={key}>
              <TableHead>{key}</TableHead>
              <TableCell className="w-full">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
