// app/src/hooks/useEnterBet.tsx

import { useCallback, useState } from 'react';
import * as anchor from '@project-serum/anchor'
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction } from '@solana/web3.js';
import { AnchorProvider, Program, web3, BN } from '@project-serum/anchor';
import config from '../config'; // Adjust the import path to your configuration file

export const useEnterBet = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
  
    const enterBet = useCallback(async (betId: string, price: number) => {
      console.log("Attempting to enter bet with ID:", betId, "and price:", price);

      if (!wallet) {
        console.error("Wallet not connected");
        setError(new Error("Wallet not connected"));
        return;
      }
  
      const programId = new PublicKey(config.predictionsBetProgramId);
      console.log("Using program ID:", programId.toString());

      const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
      const program = new Program(config.predictionsBetIdl, programId, provider);
      console.log("Program and provider initialized");

      try {
        setLoading(true);

        // Here, ensuring that betId is correctly converted might be important if betId is supposed to be an index
        const betIndex = parseInt(betId, 10);
        if (isNaN(betIndex)) {
          throw new Error(`Invalid betId: ${betId}`);
        }
  
        const seeds = [
          anchor.utils.bytes.utf8.encode(config.BET_ACCOUNT_SEED),
          new Uint8Array(new anchor.BN(betIndex).toArray("le", 8))
        ];
        console.log("Generated seeds for PDA");

        const [betAccountPDA, _bump] = await PublicKey.findProgramAddress(seeds, programId);
        console.log("Bet Account PDA:", betAccountPDA.toString(), "Bump:", _bump);

        // Call the `enter_bet` instruction
        const txSignature = await program.methods
          .enterBet(new anchor.BN(price))
          .accounts({
            bet: betAccountPDA,
            player: wallet.publicKey,
            systemProgram: web3.SystemProgram.programId,
          })
          .rpc();

        console.log('Entered Bet successfully. Transaction Signature:', txSignature);
        setLoading(false);
      } catch (err) {
        console.error("Failed to enter bet:", err);
        setError(err instanceof Error ? err : new Error("Failed to enter bet"));
        setLoading(false);
      }
    }, [wallet, connection]);
  
    return { enterBet, loading, error };
};
