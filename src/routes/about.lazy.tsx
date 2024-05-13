import { createLazyFileRoute } from "@tanstack/react-router";

const path = "/about" as never;
export const Route = createLazyFileRoute(path)({
  component: About,
});

function About() {
  return (
    <div>
      <h3>Welcome About</h3>
    </div>
  );
}
