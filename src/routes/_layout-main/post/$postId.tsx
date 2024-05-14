import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-main/post/$postId")({
  component: () => <PostDetails />,
});

function PostDetails() {
  const { postId } = Route.useParams();

  return <div>Post Details Page id: {postId}</div>;
}
