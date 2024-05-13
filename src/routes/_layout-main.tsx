import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-main")({
  component: () => <MainLayoutComponent />,
});

function MainLayoutComponent() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header>Header</header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="shrink">Footer</footer>
    </div>
  );
}
