type DisplayErrorProps = {
  message: string;
};

export function DisplayError({ message }: DisplayErrorProps) {
  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center">
      <h3 className="text-xl font-semibold text-destructive">
        Ops! Something went wrong
      </h3>
      <p className="text-sm text-destructive">{message}</p>
    </div>
  );
}
