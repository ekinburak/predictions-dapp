import {
  PriceStatus,
  PythHttpClient,
  getPythProgramKeyForCluster,
} from "@pythnetwork/client";
import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export const PythPriceFeed = () => {
  const { connection } = useConnection();
  const [message, setMessage] = useState(
    "Loading Crypto.SOL/USD price information..."
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!connection) {
          console.error("No Solana connection available.");
          setError("No Solana connection available.");
          return;
        }

        // Initialize PythHttpClient to fetch the current data
        const pythPublicKey = getPythProgramKeyForCluster("devnet");
        const pythClient = new PythHttpClient(connection, pythPublicKey);

        // Fetch the current data
        const data = await pythClient.getData();

        // Loop through the symbols to find Crypto.SOL/USD
        for (let symbol of data.symbols) {
          if (symbol === "Crypto.SOL/USD") {
            const price = data.productPrice.get(symbol)!;
            console.log("Price:", price);
            if (price.aggregate.price && price.aggregate.confidence) {
              setMessage(
                `${symbol}: $${price.aggregate.price.toFixed(
                  2
                )} ±$${price.aggregate.confidence.toFixed(2)} Status: ${
                  PriceStatus[price.aggregate.status]
                }`
              );
            } else {
              console.error("Price data is not available.");
            }
            return; // Exit loop once we have found and displayed the target symbol
          }
        }

        // If the symbol was not found
        setError("Crypto.SOL/USD data is not available at the moment.");
      } catch (err) {
        setError(
          "Failed to fetch data from Pyth. Please check your network and try again."
        );
        console.error("Pyth data fetch error:", err);
      }
    };

    if (connection) {
      fetchData();
    } else {
      setError("Connection is not available.");
    }
  }, [connection]);

  return (
    <div>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{message}</p>}
    </div>
  );
};
