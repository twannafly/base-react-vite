import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "../components/_dev-tools/ReactQueryDevTools";
import { TanStackRouterDevtools } from "../components/_dev-tools/TanStackRouterDevTools";
import ProviderRoot from "../components/_provider";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ProviderRoot>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </ProviderRoot>
  );
}
