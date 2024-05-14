import { AlphaWalletAdapter } from "@solana/wallet-adapter-alpha";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { CloverWalletAdapter } from "@solana/wallet-adapter-clover";
import { Coin98WalletAdapter } from "@solana/wallet-adapter-coin98";
import { CoinbaseWalletAdapter } from "@solana/wallet-adapter-coinbase";
import { CoinhubWalletAdapter } from "@solana/wallet-adapter-coinhub";
import { FractalWalletAdapter } from "@solana/wallet-adapter-fractal";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { SolongWalletAdapter } from "@solana/wallet-adapter-solong";
import { clusterApiUrl } from "@solana/web3.js";
import { PropsWithChildren, useMemo } from "react";
import { NODE_ENV } from "../../constants";

type SolanaWalletProviderProps = PropsWithChildren;

export default function SolanaWalletProvider(props: SolanaWalletProviderProps) {
  const network =
    NODE_ENV === "production"
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Testnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallet = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new AlphaWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new CoinbaseWalletAdapter(),
      new CoinhubWalletAdapter(),
      new SolongWalletAdapter(),
      new FractalWalletAdapter(),
    ],
    []
  );
  const { children } = props;

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallet} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
