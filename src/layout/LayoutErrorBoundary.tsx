import { FC, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};
