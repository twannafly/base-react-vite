import React, { Suspense } from "react";

const RouteDevTools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export function TanStackRouterDevtools() {
  return (
    <Suspense>
      <RouteDevTools />
    </Suspense>
  );
}
