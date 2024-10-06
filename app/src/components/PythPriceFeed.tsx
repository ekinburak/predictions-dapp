import { HermesClient } from "@pythnetwork/hermes-client";
import { useEffect, useState } from "react";

interface PythPriceFeedProps {
  onChangePriceData: (data: { time: number; price: number }[]) => void;
}

export const PythPriceFeed = ({ onChangePriceData }: PythPriceFeedProps) => {
  const [message, setMessage] = useState(
    "Loading Crypto.SOL/USD price information..."
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize the HermesClient
    const hermesClient = new HermesClient("https://hermes.pyth.network", {});

    // SOL/USD price ID (Devnet)
    const solPriceId =
      "0x89875379e70f8fbadc17aef315adf3a8d5d160b811435537e03c97e8aac97d9c";

    let isMounted = true;

    const fetchPriceUpdates = async () => {
      try {
        // Fetch the latest price update for SOL/USD
        const priceUpdates = await hermesClient.getLatestPriceUpdates([
          solPriceId,
        ]);

        if (priceUpdates.parsed?.length > 0) {
          const priceUpdate = priceUpdates.parsed[0];

          // Access the price, confidence, and exponent
          const priceStr = priceUpdate.price.price;
          const confStr = priceUpdate.price.conf;
          const expo = priceUpdate.price.expo;

          // Convert strings to numbers
          const price = parseFloat(priceStr);
          const conf = parseFloat(confStr);

          // Calculate the actual price and confidence
          const actualPrice = price * Math.pow(10, expo);
          const actualConf = conf * Math.pow(10, expo);

          if (
            !isNaN(actualPrice) &&
            !isNaN(actualConf) &&
            isFinite(actualPrice) &&
            isFinite(actualConf)
          ) {
            const currentTime = Date.now();

            if (isMounted) {
              // Update the message
              setMessage(
                `SOL/USD: $${actualPrice.toFixed(2)} ±$${actualConf.toFixed(2)}`
              );

              // Append the new price data to the array
              onChangePriceData((prevData) => {
                const newData = [
                  ...prevData,
                  { time: currentTime, price: actualPrice },
                ];
                // Optionally limit the array size to the last 60 entries
                return newData.length > 60 ? newData.slice(-60) : newData;
              });
            }
          } else {
            console.error("Price data is not available or invalid.");
          }
        } else {
          console.error("No price updates available.");
        }
      } catch (err) {
        console.error("Error fetching price updates:", err);
        setError("Failed to fetch price updates.");
      }
    };

    // Fetch price updates every second
    const intervalId = setInterval(fetchPriceUpdates, 1000);

    // Fetch immediately on mount
    fetchPriceUpdates();

    // Clean up when the component unmounts
    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{message}</p>}
    </div>
  );
};
