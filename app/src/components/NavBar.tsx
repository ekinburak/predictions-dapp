import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { PersonIcon } from "@radix-ui/react-icons";

export function NavBar() {
  // Use the specified type in function parameter
  // Use the useWallet hook to check the wallet connection status
  const { connected } = useWallet();

  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black font-semibold">Solana Fucker</div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-black hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-black hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="text-black hover:text-gray-300">
            Contact
          </a>
          <div className="flex items-center">
            {/* Conditionally render the profile icon if the wallet is connected */}
            {connected && (
              <a
                href="/profile-edit"
                className="text-black hover:text-gray-300 mr-2 w-5 h-4 text-lg"
              >
                {/* Your profile icon */}
                <PersonIcon className="w-4 h-4 text-lg" />
              </a>
            )}
            <WalletMultiButton
              style={{ backgroundColor: "midnightblue", color: "white" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
