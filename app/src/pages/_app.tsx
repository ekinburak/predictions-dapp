// app/src/pages/_app.tsx

import React, { FC, useEffect, useMemo, useState } from 'react';
import type { AppProps } from 'next/app'
import { 
    ConnectionProvider, 
    WalletProvider} from "@solana/wallet-adapter-react"
import {     
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton 
} from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"
import "@solana/wallet-adapter-react-ui/styles.css"


export default function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false)

    // Define an array of wallet adapters
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

    useEffect(() => {
        setMounted(true)
    }, [])

    // Custom RPC endpoint
    const CUSTOM_RPC_ENDPOINT = 'https://devnet.helius-rpc.com/?api-key=d8751f30-6597-493e-a14d-b079088d4fb7';
    
    return (
        <ConnectionProvider endpoint={CUSTOM_RPC_ENDPOINT} config={{ commitment: 'confirmed' }}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              {mounted && <Component {...pageProps} />}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      );
    }
