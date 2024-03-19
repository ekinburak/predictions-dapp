// app/src/components/PythPriceFeed.tsx
import { PriceStatus, PythConnection, getPythProgramKeyForCluster } from "@pythnetwork/client";
import { useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect } from "react";



export const PythPriceFeed = () => {
    const { connection } = useConnection();
    const [message, setMessage] = useState("Loading Crypto.BTC/USD price information...");

    useEffect(() => {
        const pythConnection = new PythConnection(connection, getPythProgramKeyForCluster('devnet'));

        pythConnection.onPriceChange((product, price) => {
            // Check if the update is for Crypto.SOL/USD
            if (product.symbol === "Crypto.SOL/USD") {
                if (price.price && price.confidence) {
                    // Update state with price and confidence if available
                    setMessage(`${product.symbol}: $${price.price.toFixed(2)} ±$${price.confidence.toFixed(2)}`);
                } else {
                    // Update state with a status message if price is not available
                    setMessage(`${product.symbol}: Price currently unavailable. Status is ${PriceStatus[price.status]}`);
                }
            }
        });

        pythConnection.start();

        // Cleanup function to stop the connection when the component unmounts
        return () => {
            pythConnection.stop();
        };
    }, [connection]); // Depend on connection to re-initialize if it changes

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};
