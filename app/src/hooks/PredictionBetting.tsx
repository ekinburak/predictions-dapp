// app/src/hooks/PredictionBetting.tsx

import { useCallback, useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program, web3, BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import config from '@/config';
import { initializeMasterAccount } from './initializeMasterAccount';


interface MasterAccount {
  lastBetId: BN;            // lastBetId is a Big Number (BN)
}

const generateBetAccountPDA = async (masterLastBetId: number): Promise<[PublicKey, number]> => {
  console.log("Generated betAccount PDA:", masterLastBetId.toString());
  const seeds = [
    anchor.utils.bytes.utf8.encode(config.BET_ACCOUNT_SEED),
    new Uint8Array(new BN(masterLastBetId + 1).toArray("le", 8)), // Increment lastBetId by 1 and convert to byte array
  ];
  const programId = new PublicKey(config.predictionsBetProgramId); // Ensure this matches your actual program ID
  const [betAccountPda, bump] = await PublicKey.findProgramAddressSync(seeds, programId);
  console.log("Generated betAccount PDA:", betAccountPda.toString(), "with seeds:", seeds.map(seed => seed.toString()), "and bump:", bump);
  return [betAccountPda, bump];
};

export const useSmartContract = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [masterAccountAddress, setMasterAccountAddress] = useState<PublicKey | null>(null);
  const [masterLastBetId, setMasterLastBetId] = useState<number>(0);

  const initialize = useCallback(async () => {
    if (!connection || !wallet) {
      console.log("Connection or wallet not available");
      return;
    }
  
    const { message, masterAccountAddress: address } = await initializeMasterAccount(connection, wallet);
    console.log(message);
  
    if (address) {
      setMasterAccountAddress(address);
  
      const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
      const program = new Program(config.predictionsBetIdl, new PublicKey(config.predictionsBetProgramId), provider);
      try {
        // First cast to unknown, then to MasterAccount
        const masterAccount = await program.account.master.fetch(address) as unknown as MasterAccount;
        const lastBetId = masterAccount.lastBetId.toNumber(); // Should work if lastBetId is indeed a BN
        setMasterLastBetId(lastBetId);
      } catch (error) {
        console.error("Failed to fetch master account details:", error);
      }
    }
  }, [connection, wallet]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const submitBet = async (sol: string, guess: string, time: string, priceKey: string) => {
    if (!wallet || !wallet.publicKey || !connection || !masterAccountAddress || masterLastBetId === null) {
        console.log("Missing prerequisites for submitting a bet.");
        return;
    }

    // Assuming the 'sol' parameter represents the amount in SOL (not in lamports) to be converted to lamports
    const amountLamports = new BN(parseFloat(sol) * web3.LAMPORTS_PER_SOL); // Convert SOL to lamports
    const predictionPrice = parseFloat(guess); // Assuming predictionPrice does not need to be converted into BN for your smart contract
    const durationSeconds = new BN(parseInt(time, 10)); // Convert string to number then to BN
    const pythPriceKey = new PublicKey(priceKey); // Make sure priceKey is correctly formatted as a PublicKey

    const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
    const program = new Program(config.predictionsBetIdl, new PublicKey(config.predictionsBetProgramId), provider);

    // Generate PDA for the bet account
    const [betAccountPda, bump] = await generateBetAccountPDA(masterLastBetId);

    // Check if bet account already exists
    try {
      const accountInfo = await connection.getAccountInfo(betAccountPda);
      if (accountInfo) {
        console.error("Bet account already exists with the PDA:", betAccountPda.toString());
        return;
      }
    } catch (error) {
      console.error("Error checking bet account existence:", error);
      return;
    }

    try {

        console.log("Preparing to submit bet with the following details:");
        console.log(`Amount in Lamports: ${amountLamports.toString()}`);
        console.log(`Prediction Price: ${predictionPrice}`);
        console.log(`Duration in Seconds: ${durationSeconds.toString()}`);
        console.log(`Pyth Price Key: ${pythPriceKey.toString()}`);
        console.log(`Bet Account PDA: ${betAccountPda.toString()}`);
        console.log(`Master Account Address: ${masterAccountAddress.toString()}`);

        // Submit the bet
        const txSignature = await program.methods
          .createBet(amountLamports,predictionPrice,durationSeconds,pythPriceKey)
          .accounts({
                    bet: betAccountPda,
                    master: masterAccountAddress,
                    player: wallet.publicKey,
                    systemProgram: web3.SystemProgram.programId,
                })
          .rpc();

        console.log('Bet submitted successfully. Transaction Signature:', txSignature);
        // Consider updating the masterLastBetId here if necessary
    } catch (error) {
        console.error('Error submitting bet:', error);
    }
};

  return { submitBet };

};
