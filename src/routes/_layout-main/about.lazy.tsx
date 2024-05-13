import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout-main/about")({
  component: About,
});

function About() {
  return (
    <div>
      <h3>Welcome About</h3>
    </div>
  );
}
