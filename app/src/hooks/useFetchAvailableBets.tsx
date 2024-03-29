// app/src/hooks/useFetchAvailableBets.ts

import { useCallback, useState, useEffect } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program, web3, BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import config from '@/config';
import { IBetAccount, Bet, BetState, Prediction } from '@/lib/types';


// Helper function to interpret the state object into a readable string
function interpretBetState(stateObj: object, duration: number): string {
    const stateKeys = Object.keys(stateObj);
    if (duration < 0 && (stateKeys.includes('created') || stateKeys.includes('started'))) {
        return 'Expired'; // Mark as Expired if duration is less than 0 and state is Created or Started
    } else if (stateKeys.includes('created')) {
        return 'Created';
    } else if (stateKeys.includes('started')) {
        return 'Started';
    } else if (stateKeys.includes('playerAWon')) {
        return 'Player A Won';
    } else if (stateKeys.includes('playerBWon')) {
        return 'Player B Won';
    } else if (stateKeys.includes('draw')) {
        return 'Draw';
    }
    return 'Unknown State';
}

const useFetchAvailableBets = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const [bets, setBets] = useState<Bet[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBets = useCallback(async () => {
        if (!wallet || !connection) return;

        setIsLoading(true);

        const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
        const program = new Program(config.predictionsBetIdl, new PublicKey(config.predictionsBetProgramId), provider);

        try {
            const fetchedBets = await program.account.bet.all();
            const formattedBets = fetchedBets.map(bet => {
                // Assuming the account data matches the IBetAccount interface
                const accountData = bet.account as unknown as IBetAccount;
                const duration = accountData.expiryTs.toNumber() - Math.floor(Date.now() / 1000);
                
                return {
                    id: accountData.id.toString(),
                    pair: "SOL/USDC", // Example, adjust as needed
                    potVolume: accountData.amount.toNumber(), // Ensure this is a number
                    duration,
                    status: interpretBetState(accountData.state, duration), // Derive the 'status' string
                    state: accountData.state,
                    predictionA: accountData.predictionA,
                    predictionB: accountData.predictionB ? accountData.predictionB : undefined,
                    expiryTs: duration, // Add expiryTs property to each object
                };
            });

            setBets(formattedBets);
        } catch (error) {
            console.error("Failed to fetch bets:", error);
        } finally {
            setIsLoading(false);
        }
    }, [wallet, connection]);

    useEffect(() => {
        if (wallet) {
            fetchBets();
        }
    }, [wallet, fetchBets]);

    return { bets, isLoading };
};

export default useFetchAvailableBets;

