import { Button } from "@/components/ui/button";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from "@solana/wallet-adapter-react";

export function NavBar() { // Use the specified type in function parameter
  // Use the useWallet hook to check the wallet connection status
  const { connected } = useWallet();

  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold">
          Solana Fucker
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          <div className="flex items-center">
            {/* Conditionally render the profile icon if the wallet is connected */}
            {connected && (
              <a href="/profile-edit" className="text-white hover:text-gray-300 mr-2">
                {/* Your profile icon */}
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5.121 17.121a3 3 0 111.415 1.414M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 3a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </a>
            )}
            <WalletMultiButton style={{ backgroundColor: 'midnightblue', color: 'white' }} />
          </div>
        </div>
      </div>
    </nav>
  );
}
