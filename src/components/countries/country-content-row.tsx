import { cn } from "~/lib/utils";

type ContentRowProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  isSeparator?: boolean;
};

export function CountryContentRow({
  className,
  label,
  children,
  isSeparator = true,
  ...props
}: ContentRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-2",
        isSeparator ? "border-b" : "",
        className,
      )}
      {...props}
    >
      <span>{label}:</span>
      {children}
    </div>
  );
}
