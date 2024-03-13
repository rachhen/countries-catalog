import { useState } from "react";
import { SortBy, useCountryContext } from "~/contexts/country";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function SearchBoxSortButton() {
  const [position, setPosition] = useState<SortBy | undefined>();
  const { onSort } = useCountryContext();

  function handleSort(sort: SortBy) {
    setPosition(sort);
    onSort(sort);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0z"
              clipRule="evenodd"
            />
          </svg>
          Sort By
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => handleSort(value as SortBy)}
        >
          <DropdownMenuRadioItem value="asc">ASC</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="desc">DESC</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
