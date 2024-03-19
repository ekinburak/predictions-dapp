// src/components/EnterBetForm.jsx

import React, { useState } from 'react';

interface EnterBetFormProps {
  betId: string;
  onSubmit: (betId: string, betPrice: string) => void;
  onClose: () => void;
}

export const EnterBetForm: React.FC<EnterBetFormProps> = ({ betId, onSubmit, onClose }) => {
  const [betPrice, setBetPrice] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(betId, betPrice);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Enter Bet Price</h3>
          <div className="mt-2 px-7 py-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="number"
                value={betPrice}
                onChange={(e) => setBetPrice(e.target.value)}
                placeholder="Enter your bet price in USD"
                className="input border rounded-md"
              />
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit Bet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
