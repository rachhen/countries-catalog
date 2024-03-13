import { Country } from "~/types/country";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import { numberWithCommas } from "~/lib/number-format";

type CountryItemModalCodesProps = {
  item: Country;
};

export function CountryItemModalGeography({
  item,
}: CountryItemModalCodesProps) {
  return (
    <div className="pt-4">
      <h2 className="text-xl pb-1 font-semibold text-card-foreground">
        Geography
      </h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>Region</TableHead>
            <TableCell className="text-end w-full">{item.region}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Subregion</TableHead>
            <TableCell className="text-end">{item.subregion}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Capital</TableHead>
            <TableCell className="text-end">{item.capital}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Demonym</TableHead>
            <TableCell className="text-end">
              {Object.entries(item.demonyms)
                .map(([, value]) => value.f)
                .join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Lat/Lng</TableHead>
            <TableCell className="text-end">
              <a
                target="_blank"
                href={item.maps.googleMaps}
                className="text-blue-600 hover:underline"
              >
                {item.latlng.map((value) => value).join(", ")}
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Area</TableHead>
            <TableCell className="text-end">
              {numberWithCommas(item.area)} km²
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
