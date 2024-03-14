import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useCountryContext } from "~/contexts/country";
import { pageSize } from "~/hooks/use-countries-paginate";
import { cn } from "~/lib/utils";

export function CountryPagination() {
  const { page, totalItems, countries, onPaginate } = useCountryContext();

  if (countries.length < pageSize) {
    return null;
  }

  const isStartPage = page === 1;
  const isEndPage = page === Math.ceil(totalItems / pageSize);

  return (
    <Pagination className="py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn("cursor-pointer", {
              "pointer-events-none opacity-50": isStartPage,
            })}
            onClick={() => {
              onPaginate(Math.max(page - 1, 1));
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={cn("cursor-pointer", {
              "pointer-events-none opacity-50": isEndPage,
            })}
            onClick={() => {
              onPaginate(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
