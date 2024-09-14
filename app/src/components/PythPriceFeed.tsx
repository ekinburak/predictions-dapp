import { PriceStatus, PythConnection, getPythProgramKeyForCluster } from "@pythnetwork/client";
import { useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect } from "react";

export const PythPriceFeed = () => {
    const { connection } = useConnection();
    const [message, setMessage] = useState("Loading Crypto.BTC/USD price information...");
    const [error, setError] = useState<string | null>(null); // State to store error messages

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to create a Pyth connection
                const pythConnection = new PythConnection(connection, getPythProgramKeyForCluster('devnet'));

                pythConnection.onPriceChange((product, price) => {
                    try {
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
                    } catch (err) {
                        // Catch any errors during the price update
                        setError("Error processing price data. Please try again later.");
                        console.error("Price data error:", err);
                    }
                });

                // Start fetching price data
                pythConnection.start();
                
                // Cleanup function to stop the connection when the component unmounts
                return () => {
                    pythConnection.stop();
                };
            } catch (err) {
                // Catch any errors related to connection setup
                setError("Failed to establish connection with Pyth. Please check your network and try again.");
                console.error("Pyth connection error:", err);
            }
        };

        if (connection) {
            fetchData();
        } else {
            setError("Connection is not available.");
        }
    }, [connection]); // Depend on connection to re-initialize if it changes

    return (
        <div>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
};
