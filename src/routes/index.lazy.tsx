import { createLazyFileRoute } from "@tanstack/react-router";

const path = "/" as never;
export const Route = createLazyFileRoute(path)({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home</h3>
    </div>
  );
}
