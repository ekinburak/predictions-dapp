// app/src/hooks/useCloseBet.tsx

import { useCallback, useState } from 'react';
import * as anchor from '@coral-xyz/anchor';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import config from '@/config'; 
import { IBetAccount } from '@/lib/types';

export const useCloseBet = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const closeBet = useCallback(async (betId: string) => {
        console.log("Attempting to close bet with ID:", betId);

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
            const [betAccountPDA, _bump] = await anchor.web3.PublicKey.findProgramAddressSync(seeds, programId);
            console.log("Bet Account PDA:", betAccountPDA.toString(), "Bump:", _bump);

            // Call the `close_bet` instruction
            const txSignature = await program.methods
            .closeBet()
            .accounts({
                bet: betAccountPDA,
                player: wallet.publicKey,
            })
            .rpc();

            console.log('Claimed Bet successfully. Transaction Signature:', txSignature);

            console.log('Closed Bet successfully');
            setLoading(false);
        } catch (err) {
            console.error("Failed to close bet:", err);
            setError(err instanceof Error ? err : new Error("Failed to close bet"));
            setLoading(false);
        }
    }, [wallet, connection]);

    return { closeBet, loading, error };
};