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

export const useFetchLatestPrice = ({ connection, wallet, programId }: Wrapper) => {
  const [priceAccountData, setPriceAccountData] = useState<PriceAccountData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState(0); // Timestamp of the last fetch attempt

  useEffect(() => {
    const fetchPriceAccountData = async () => {
      console.log("Attempting to fetch latest price...");

      // Rate limiting: Ensure at least 5 seconds between fetches
      const now = Date.now();
      if (now - lastFetch < 10000) {
        console.log("Waiting to prevent too many requests...");
        setTimeout(fetchPriceAccountData, 10000 - (now - lastFetch));
        return;
      }
      setLastFetch(now);

      if (!wallet) {
        console.log("Wallet not connected for fetching price");
        setError('Wallet not connected for fetching price');
        return;
      }

      try {
          console.log("Fetching program...");
          const program = await getProgram(connection, wallet, programId, config.priceFeedIdl);
          console.log("Program fetched successfully:", program.programId.toString());

          const seeds = [Buffer.from(config.PRICE_ACCOUNT_SEED), new PublicKey(config.priceFeedKey).toBuffer()];
          const [priceAccountPda] = await PublicKey.findProgramAddress(seeds, programId);

          const fetchedPriceAccount = await program.account.priceAccount.fetch(priceAccountPda);
          console.log("Fetched price account data:", fetchedPriceAccount);

          // Use the format function to convert and validate the fetched data
          const formattedData = formatPriceAccountData(fetchedPriceAccount);
  
          setPriceAccountData(formattedData);
      } catch (error) {
          console.error("Error fetching price account data:", error);
          setError('Error fetching price account data');
      }
    };

    fetchPriceAccountData();
  }, [wallet, connection, programId, lastFetch]); // Include lastFetch in the dependency array to trigger the effect when it changes

  return { priceAccountData, error };
};
