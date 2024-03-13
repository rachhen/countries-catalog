import { Skeleton } from "../ui/skeleton";

export function CountryLoading() {
  return (
    <div className="container">
      <div className="flex flex-col gap-4 my-4">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-[48px] ws-full" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
