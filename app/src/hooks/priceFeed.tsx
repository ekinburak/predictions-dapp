// app/src/hooks/priceFeed.tsx

import { useState, useEffect } from 'react';
import { getProgram } from "./anchor";
import * as anchor from '@project-serum/anchor';
import { AnchorWallet } from "@solana/wallet-adapter-react";
import config from "@/config";

export interface PriceFeedWrapper {
  connection: anchor.web3.Connection;
  wallet: AnchorWallet | undefined;
  programId: anchor.web3.PublicKey;
}

const usePriceFeed = ({ connection, wallet, programId }: PriceFeedWrapper) => {
  const [priceData, setPriceData] = useState([]);

  const fetchPriceData = async () => {
    if (!wallet) throw new Error('Wallet not connected');

    // Assuming you have a `getPrice` method in your smart contract
    const program = await getProgram(connection, wallet, programId, config.priceFeedIdl);

    // Call your `getPrice` method from the smart contract
    // Adjust this code block to match how your actual smart contract method is structured
    const fetchedData = await program.methods.getPrice().rpc();

    // Process and return the price data
    // Adjust this according to the structure of the data returned by your smart contract
    return fetchedData ? JSON.parse(fetchedData.toString()) : [];
  };

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const data = await fetchPriceData();
      if (mounted) {
        setPriceData(data);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [connection, wallet, programId]);

  return priceData;
};

export default usePriceFeed;

