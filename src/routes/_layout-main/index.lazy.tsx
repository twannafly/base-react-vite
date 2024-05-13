import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home</h3>
    </div>
  );
}
