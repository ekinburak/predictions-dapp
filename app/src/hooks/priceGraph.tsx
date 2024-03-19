// app/src/hooks/priceGraph.tsx

import { useState, useEffect } from 'react';
import { getProgram } from './anchor';
import { PublicKey, Connection } from '@solana/web3.js';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import config from '@/config';

interface PriceAccountData {
  pythPriceFeedKey: string;
  price: string;
  confidence: string;
  lastUpdated: string;
}

export interface Wrapper {
  connection: Connection;
  wallet: AnchorWallet | undefined;
  programId: PublicKey;
}

const formatPriceAccountData = (data: any): PriceAccountData => {
    // Perform necessary validation and transformation here
    return {
        pythPriceFeedKey: data.pythPriceFeedKey.toString(), // Example transformation
        price: data.price.toString(),
        confidence: data.confidence.toString(),
        lastUpdated: data.lastUpdated.toString(),
    };
};

export const useManualFetchLatestPrice = ({ connection, wallet, programId }: Wrapper) => {
  const [priceAccountData, setPriceAccountData] = useState<PriceAccountData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPriceAccountData = async () => {
    if (!wallet) {
      setError('Wallet not connected for fetching price');
      return;
    }

    try {
      const program = await getProgram(connection, wallet, programId, config.priceFeedIdl);
      
      const seeds = [Buffer.from(config.PRICE_ACCOUNT_SEED), new PublicKey(config.priceFeedKey).toBuffer()];
      const [priceAccountPda] = await PublicKey.findProgramAddress(seeds, programId);

      const fetchedPriceAccount = await program.account.priceAccount.fetch(priceAccountPda);
      const formattedData = formatPriceAccountData(fetchedPriceAccount);

      setPriceAccountData(formattedData);
    } catch (error) {
      console.error("Error fetching price account data:", error);
      setError('Error fetching price account data');
    }
  };

  return { fetchPriceAccountData, priceAccountData, error };
};
