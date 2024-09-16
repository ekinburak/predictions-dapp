import {
  PriceStatus,
  PythConnection,
  getPythProgramKeyForCluster,
} from "@pythnetwork/client";
import { useConnection } from "@solana/wallet-adapter-react";
import React, { useState, useEffect } from "react";

export const PythPriceFeed = () => {
  const { connection } = useConnection();
  const [message, setMessage] = useState(
    "Loading Crypto.BTC/USD price information..."
  );
  const [error, setError] = useState<string | null>(null); // State to store error messages

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!connection) {
          console.error("No Solana connection available.");
          setError("No Solana connection available.");
          return;
        }

        // Log the connection to verify it's correct
        console.log("Connection established:", connection);

        // Attempt to create a Pyth connection
        const pythConnection = new PythConnection(
          connection,
          getPythProgramKeyForCluster("devnet")
        );

        // Log the Pyth connection object
        console.log("PythConnection initialized:", pythConnection);

        pythConnection.onPriceChange((product, price) => {
          console.log("Price change detected:", product, price); // Debug the price change

          try {
            // Check if the update is for Crypto.SOL/USD
            if (product.symbol === "Crypto.SOL/USD") {
              if (price.price && price.confidence) {
                setMessage(
                  `${product.symbol}: $${price.price.toFixed(
                    2
                  )} ±$${price.confidence.toFixed(2)}`
                );
              } else {
                setMessage(
                  `${product.symbol}: Price currently unavailable. Status is ${
                    PriceStatus[price.status]
                  }`
                );
              }
            }
          } catch (err) {
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
        setError(
          "Failed to establish connection with Pyth. Please check your network and try again."
        );
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
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{message}</p>}
    </div>
  );
};
