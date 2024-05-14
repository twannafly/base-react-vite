import { proxy } from "valtio";

type GlobalStoreTypes = {
  count: number;
  increaseCount: () => void;
};

function increaseCount() {
  return (GlobalStore.count = GlobalStore.count + 1);
}
export const GlobalStore = proxy<GlobalStoreTypes>({
  count: 0,
  increaseCount,
});
