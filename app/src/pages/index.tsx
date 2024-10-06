// app/src/pages/index.tsx

import AvailableBets from "@/components/AvailableBets";
import { NavBar } from "@/components/NavBar";
import { BettingComponent } from "@/components/PriceGraphBet";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import {
  useWalletModal,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "./style.css";

const IndexPage: React.FC = () => {
  const { connected, connect, connecting, disconnect, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const notConnected = !connected && !connecting;

  // Trigger wallet connection modal if not connected
  useEffect(() => {
    if (notConnected) {
      setVisible(true);
    }
  }, [connected, connecting, connect]);

  return (
    <div>
      <NavBar />
      <BettingComponent />
      <AvailableBets />
    </div>
  );
};

export default IndexPage;
