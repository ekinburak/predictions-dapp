// app/src/hooks/initializeMasterAccount.tsx

import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import config from '@/config';

export const initializeMasterAccount = async (connection: Connection, wallet: AnchorWallet) => {
    if (!wallet) {
        console.error("Wallet not connected");
        return { message: "Wallet not connected", masterAccountAddress: null };
    }

    const seed = config.MASTER_ACCOUNT_SEED; // Define a seed for your master account
    const programId = new PublicKey(config.predictionsBetProgramId);
    let [masterAccountAddress, _] = await PublicKey.findProgramAddressSync([Buffer.from(seed)], programId);

    const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
    const program = new Program(config.predictionsBetIdl, programId, provider);

    // Check if the master account exists
    let accountInfo = await connection.getAccountInfo(masterAccountAddress);
    if (!accountInfo) {
        console.log("Master account does not exist. Creating...");
        try {
            const tx = await program.methods.createMaster({
                accounts: {
                    master: masterAccountAddress,
                    payer: wallet.publicKey,
                    systemProgram: SystemProgram.programId,
                },
            }).rpc();
            console.log('Master account created successfully, transaction signature:', tx);
            return { message: "Master account created successfully.", masterAccountAddress };
        } catch (error) {
            console.error('Error creating master account:', error);
            return { message: "Failed to create master account.", masterAccountAddress: null };
        }
    } else {
        console.log("Master account already exists. Account address is:", masterAccountAddress.toString());
        return { message: "Master account already exists.", masterAccountAddress };
    }
};
