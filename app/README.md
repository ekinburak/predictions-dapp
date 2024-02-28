# Bet on any price prediction

Prediction DApp on Solana with Next.js.

## Built With

This project is built with the following libraries and frameworks:

- [Next.js](https://nextjs.org/): A React framework for building modern web applications.
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/): Solana's JavaScript API for interacting with the Solana blockchain.
- [Anchor](https://project-serum.github.io/anchor/): A framework for Solana's Sealevel runtime providing several convenient developer tools.
- [Solana Wallet Adapter](https://github.com/solana-labs/wallet-adapter): A collection of Wallet Adapters for popular Solana wallets.

## Getting Started

src/app/: Contains global styles and layout definitions for the application, including the favicon, global CSS, and a layout component that might be used as a wrapper for pages.

src/components/: This directory hosts reusable UI components divided into specific UI functionalities (like button, card, input, and scroll-area) and larger components (NavBar, arbitrage, header, oracle, pyth_send_usd, sendLamports) that are likely used across different parts of the application.

src/config/: Contains configuration files for the application, potentially including settings for various features or integrations within the app.

src/hooks/: Custom React hooks directory, suggesting the application's logic is abstracted into reusable hooks (anchor, counter, oracle, priceFeed, spl_token). This indicates a modern React development approach, encapsulating logic and state management in a reusable manner.

src/lib/: Likely contains utility functions or libraries that are used across the application. The utils.ts file might include helper functions for common tasks.

src/pages/: In Next.js, the pages directory contains the page components that are automatically routed based on their file names. This includes the main application entry point (_app.tsx), potentially the home page (index.tsx), and other specific pages like oracle.tsx and sendUsd.tsx, which might be dedicated to specific features or sections of the application.

style.css: A CSS file that could contain specific styles for pages or components located within the pages directory.