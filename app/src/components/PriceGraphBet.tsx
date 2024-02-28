import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFetchLatestPrice } from '../hooks/priceGraph';
import { useConnection, useWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import config from "@/config";
import { PublicKey } from '@solana/web3.js';


export const PriceGraphBet = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();
    const [betAmount, setBetAmount] = useState('');
    const [pricePrediction, setPricePrediction] = useState('');
    const [duration, setDuration] = useState('');

    // Use the hook to fetch the latest price
    const { priceAccountData, error } = useFetchLatestPrice({
        connection,
        wallet,
        programId: new PublicKey(config.priceFeedProgramId),
    });

    // Extract the latest price, handle null or undefined values
    const latestPrice = priceAccountData?.price
        ? `$${priceAccountData.price}`
        : 'Fetching...';

    // Use the hook to fetch the latest price
    useEffect(() => {
        // Log to ensure that the data is fetched
        if (priceAccountData) {
            console.log(`New price fetched: ${priceAccountData.price}`);
        }
    }, [priceAccountData]); // Re-run this effect when priceAccountData changes

    const submitBet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Bet submitted with details:', { betAmount, pricePrediction, duration });
        // Integration with smart contract to submit bet would go here.
    };

    return (
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
            <div className="container px-8 md:px-12 lg:px-24 xl:px-32 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Place Your Bet</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Enter your bet details below. Use Pyth Network's price feeds for real-time SOL price prediction.
                            </p>
                        </div>
                        <form onSubmit={submitBet} className="w-full max-w-sm space-y-4">
                            <Input
                                className="max-w-lg flex-1"
                                placeholder="Bet Amount"
                                type="number"
                                value={betAmount}
                                onChange={(e) => setBetAmount(e.target.value)}
                            />
                            <Input
                                className="max-w-lg flex-1"
                                placeholder="Price Prediction"
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
                            <p className="text-gray-500 dark:text-gray-300">Price Graph Placeholder</p>
                        </div>
                        <p className="text-center mt-4 text-lg font-medium">
                            Latest Price: {error ? <span className="text-red-500">Error: {error}</span> : latestPrice}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceGraphBet;
