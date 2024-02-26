// app/src/hooks/anchor.tsx

import { Address, AnchorProvider, Idl, Program } from '@project-serum/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Connection } from '@solana/web3.js'
import { WalletNotConnectedError, } from '@solana/wallet-adapter-base';

//create function that gets the programm
/**
 * Function to get a program instance.
 * @param connection - The connection to the Solana network.
 * @param wallet - The wallet to use for signing and paying for transactions.
 * @param programId - The public key (address) of the deployed program.
 * @param idl - The interface definition of the program.
 * @returns An instance of the program.
 */
export const getProgram = async (
    connection: Connection, 
    wallet: AnchorWallet | undefined, 
    programId: Address, 
    idl: Idl
    ) => {
    
        console.log('Connected to network:', connection.rpcEndpoint);

        if (!wallet) throw new WalletNotConnectedError();
        
        // Log the public key of the connected wallet.
        console.log('Using wallet with publicKey:', wallet.publicKey.toBase58());
        
        // Create an AnchorProvider instance.
        const provider = new AnchorProvider(
            connection,
            wallet,
            { ...AnchorProvider.defaultOptions(), commitment: "confirmed" }
            )
        
        console.log('Provide program with ID:', provider);

        console.log('IDL', idl);

        // console.log('Program ID:', programId);

        // Create a Program instance.
        const program = new Program(idl, programId, provider)
        
        // Log the program ID.
        console.log('Initialized program with ID:', programId.toString());
        
        return program
}

/**
 * Function to get all data accounts for the counter program.
 * @param connection - The connection to the Solana network.
 * @param wallet - The wallet to use for the program.
 * @param programId - The public key (address) of the deployed program.
 * @param idl - The interface definition of the program.
 * @returns An array of all counter accounts.
 */
export const getDataAccounts = async <T extends unknown>(connection: Connection, wallet: AnchorWallet | undefined, programId: Address, idl: Idl) => {
    if (!wallet) {
        console.log('Wallet is not connected');
        return [];
    }
    console.log('Fetching all data accounts of type counter');
    
    // Get the program instance.
    const program = await getProgram(connection, wallet, programId, idl)
    
    // Fetch all counter accounts.
    const accs = await program.account.counter.all() as T[]
    
    // Log the number of fetched accounts.
    console.log(`Found ${accs.length} counter account(s)`);
    
    return accs
}

/**
 * Function to fetch data for a specific account.
 * @param connection - The connection to the Solana network.
 * @param wallet - The wallet to use for the program.
 * @param programId - The public key (address) of the deployed program.
 * @param pubKey - The public key of the account to fetch.
 * @param idl - The interface definition of the program.
 * @returns The fetched account data or null.
 */
export const fetchDataAccount = async <T extends unknown>(
    connection: Connection, 
    wallet: AnchorWallet | undefined, 
    programId: Address, 
    pubKey: PublicKey, 
    idl: Idl
) => {
    if (!wallet) {
        console.log('Wallet is not connected with an address:', wallet);
        return;
    }
    console.log(`Fetching data for account with public key: ${pubKey.toBase58()}`);

    try {
        // Get the program instance.
        const program = await getProgram(connection, wallet, programId, idl);
        
        // Fetch the account data.
        const acc = await program.account.counter.fetch(pubKey);
        
        // Log the fetched account data.
        console.log('Fetched account data for publicKey:', pubKey.toBase58());
        
        return acc as T | null;
    } catch (err) {
        // Detailed error logging.
        if (err instanceof Error) {
            console.error('Error fetching account:', err.message);
        } else {
            console.error('Unknown error:', err);
        }
        // Additional logic to handle the error appropriately.
        return null;
    }
}
