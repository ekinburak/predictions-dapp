// app/src/components/AvailableBets.tsx

import React, { useEffect, useState } from 'react';
import { EnterBetForm } from './EnterBetForm'; // Import the EnterBetForm component
import useFetchAvailableBets from '../hooks/useFetchAvailableBets'; // Ensure the correct path is used
import { useClaimBet } from '../hooks/useClaimBet'; // Import the useClaimBet hook
import { useEnterBet } from '../hooks/useEnterBet'; // Import the useEnterBet hook

interface AvailableBetsProps {
  connectedWalletAddress: string; // Declare the type of connectedWalletAddress as string
}

const AvailableBets: React.FC<AvailableBetsProps> = ({ connectedWalletAddress }) => {
  const { bets, isLoading } = useFetchAvailableBets();
  const { enterBet, loading: enteringBet, error } = useEnterBet(); // Use the useEnterBet hook
  const { claimBet, loading: claimingBet, error: claimError } = useClaimBet(); // Use the useClaimBet hook
  const [selectedBetId, setSelectedBetId] = useState<string | null>(null);

  // Function to open the EnterBetForm for a specific bet
  const openEnterBetForm = (betId: string) => {
    setSelectedBetId(betId);
  };

  const handleBetEntry = async (betId: string, betPrice: string) => {
    await enterBet(betId, parseFloat(betPrice));
    if (!error) {
      // Close the form and possibly refresh the bets list or show a success message
      setSelectedBetId(null);
    } else {
      // Handle the error case, e.g., show an error message
      console.error("Failed to enter bet:", error.message);
    }
  };

  const handleClaimBet = async (betId: string) => {
    try {
      await claimBet(betId);
      // Optionally handle success
    } catch (error) {
      console.error("Failed to claim bet:", error);
      // Handle the error case, e.g., show an error message
    }
  };

  if (isLoading) return <p>Loading bets...</p>;

  const currentTimestamp = Math.floor(Date.now() / 1000);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
      <div className="container px-8 md:px-12 lg:px-24 xl:px-32 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-6">Available Bets</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 dark:text-gray-400">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Pair</th>
                <th className="px-4 py-2">Pot Volume</th>
                <th className="px-4 py-2">Duration (Seconds)</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th> {/* Add a column for actions */}
              </tr>
            </thead>
            <tbody>
              {bets.map((bet) => (
                <tr key={bet.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-4 py-2">{bet.id}</td>
                    <td className="px-4 py-2">{bet.pair}</td>
                    <td className="px-4 py-2">{bet.potVolume}</td>
                    <td className="px-4 py-2">{Math.max(bet.duration, 0)}</td>
                    <td className="px-4 py-2">{bet.status}</td>
                    <td className="px-4 py-2">
                    {(bet.predictionA?.player === connectedWalletAddress || (bet.predictionB && bet.predictionB.player === connectedWalletAddress)) &&
                        currentTimestamp > bet.expiryTs && (
                          <button onClick={() => handleClaimBet(bet.id)}>
                            Claim Bet
                          </button>
                        )
                      }
                    {bet.status !== 'Expired' && bet.duration > 0 && (
                      <button onClick={() => openEnterBetForm(bet.id)}>
                        Enter Bet
                      </button>
                      )}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedBetId && (
          <EnterBetForm betId={selectedBetId} onSubmit={handleBetEntry} onClose={() => setSelectedBetId(null)} />
        )}
      </div>
    </section>
  );
};

export default AvailableBets;
