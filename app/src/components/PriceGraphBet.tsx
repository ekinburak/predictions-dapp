// app/src/components/PriceGraphBet.tsx

import React, { FormEvent, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useManualFetchLatestPrice } from "../hooks/priceGraph";
import {
  useConnection,
  useWallet,
  useAnchorWallet,
} from "@solana/wallet-adapter-react";
import config from "@/config";
import { AnchorProvider, Program, web3, BN } from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { PythPriceFeed } from "@/components/PythPriceFeed";
import { initializeMasterAccount } from "../hooks/initializeMasterAccount";
import { useSmartContract } from "../hooks/PredictionBetting";

export const BettingComponent = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [betAmount, setBetAmount] = useState("");
  const [pricePrediction, setPricePrediction] = useState("");
  const [duration, setDuration] = useState("");
  const [priceData, setPriceData] = useState<
    Array<{ time: number; price: number }>
  >([]);

  const { submitBet: submitBetToBlockchain } = useSmartContract(); // Destructure and rename for clarity

  useEffect(() => {
    // Ensure wallet is connected before attempting to initialize the master account
    if (wallet && wallet.publicKey) {
      initializeMasterAccount(connection, wallet)
        .then((status) => console.log(status)) // Log the returned status
        .catch((error) =>
          console.error("Failed to initialize master account", error)
        );
    }
  }, [wallet, connection]); // Depend on wallet and connection to rerun

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Directly pass the string values
    try {
      await submitBetToBlockchain(
        betAmount,
        pricePrediction,
        duration,
        config.priceFeedKey
      );
      console.log("Bet successfully submitted");
    } catch (error) {
      console.error("Error submitting bet to blockchain:", error);
    }
  };

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
      <div className="container px-8 md:px-12 lg:px-24 xl:px-32 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Place Your Bet
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Enter your bet details below. Use Pyth Network's price feeds for
                real-time SOL price prediction.
              </p>
            </div>
            <div className="container mx-auto">
              <PythPriceFeed onChangePriceData={setPriceData} />{" "}
              {/* This will render the PythPriceFeed component at the top */}
              <div className="px-8 md:px-12 lg:px-24 xl:px-32">
                {/* The rest of your component's content follows... */}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
              <Input
                className="max-w-lg flex-1"
                placeholder="Bet Amount in SOL"
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
              />
              <Input
                className="max-w-lg flex-1"
                placeholder="SOL Price Prediction in USD"
                type="text"
                value={pricePrediction}
                onChange={(e) => setPricePrediction(e.target.value)}
              />
              <Input
                className="max-w-lg flex-1"
                placeholder="Duration (in seconds)"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <Button
                className="bg-black hover:bg-blue-600 text-white"
                type="submit"
              >
                Submit Bet
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-4 hidden md:block overflow-x-auto sm:mt-8">
            <div className="graph-area bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-300">
                Price Graph Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettingComponent;
