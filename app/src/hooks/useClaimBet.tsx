// app/src/hooks/useClaimBet.ts

import { useCallback, useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor';
import config from '@/config'; 
import { Bet, IBetAccount } from '@/lib/types';

export const useClaimBet = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const claimBet = useCallback(async (betId: string) => {
        console.log("Attempting to claim bet with ID:", betId);

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

            // Convert betId to number
            const betIndex = parseInt(betId, 10);
            if (isNaN(betIndex)) {
                throw new Error(`Invalid betId: ${betId}`);
            }

            // Generate seeds for PDA
            const seeds = [
                anchor.utils.bytes.utf8.encode(config.BET_ACCOUNT_SEED),
                new Uint8Array(new anchor.BN(betIndex).toArray("le", 8))
            ];
            console.log("Generated seeds for PDA");

            // Find the PDA using generated seeds
            const [betAccountPDA, _bump] = await PublicKey.findProgramAddressSync(seeds, programId);
            console.log("Bet Account PDA:", betAccountPDA.toString(), "Bump:", _bump);

            // Fetch the Bet account associated with the bet ID
            console.log("Fetching Bet account...");
            const fetchedBetAccount : IBetAccount = await program.account.bet.fetch(betAccountPDA); // Using IBetAccount interface
            console.log("Bet Account:", fetchedBetAccount);

            // Extract PYTH account public key, Player A's public key, and Player B's public key from the Bet account
            const pyth = new anchor.web3.PublicKey(fetchedBetAccount.pythPriceKey);
            const playerA = new anchor.web3.PublicKey(fetchedBetAccount.predictionA.player);
            const playerB = fetchedBetAccount.predictionB ? new anchor.web3.PublicKey(fetchedBetAccount.predictionB.player) : null;
            const playerBAddress: anchor.web3.PublicKey | undefined = playerB ? new anchor.web3.PublicKey(playerB) : undefined;
            console.log("PYTH account public key:", pyth.toString());
            console.log("Player A's public key:", playerA.toString());
            console.log("Player B's public key:", playerBAddress ? playerBAddress.toString() : "Player B not present");

            // Call the `claim_bet` instruction
            const txSignature = await program.methods
            .claimBet()
            .accounts({
                bet: betAccountPDA,
                pyth, 
                playerA: playerA,
                playerB: playerBAddress,
                signer: wallet.publicKey,
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .rpc();

            console.log('Claimed Bet successfully. Transaction Signature:', txSignature);
            setLoading(false);
        } catch (err) {
            console.error("Failed to claim bet:", err);
            setError(err instanceof Error ? err : new Error("Failed to claim bet"));
            setLoading(false);
        }
    }, [wallet, connection]);

    return { claimBet, loading, error };
};
