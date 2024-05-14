import { createLazyFileRoute } from "@tanstack/react-router";
import { useSnapshot } from "valtio";
import { GlobalStore } from "../../storage/global";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Route = createLazyFileRoute("/_layout-main/")({
  component: Index,
});

function Index() {
  const { count, increaseCount } = useSnapshot(GlobalStore);
  return (
    <div>
      <span className="block">{count}</span>
      <button onClick={increaseCount}>++</button>
      <WalletMultiButton />
      <h3>Welcome Home</h3>
    </div>
  );
}
