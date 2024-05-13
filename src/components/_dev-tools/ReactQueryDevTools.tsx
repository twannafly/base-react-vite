import React, { Suspense } from "react";

const QueryDevTools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        }))
      );

export function ReactQueryDevtools() {
  return (
    <Suspense>
      <QueryDevTools buttonPosition="top-right" />
    </Suspense>
  );
}
