import { PropsWithChildren } from "react";
import SolanaWalletProvider from "./SolanaWalletProvider";

export default function ProviderRoot({ children }: PropsWithChildren) {
  return <SolanaWalletProvider> {children}</SolanaWalletProvider>;
}
