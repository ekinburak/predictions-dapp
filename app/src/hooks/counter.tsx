// app/src/hooks/counter.tsx

import { getProgram } from "./anchor"
import * as anchor from '@project-serum/anchor'
import { Connection, PublicKey, Keypair } from "@solana/web3.js"
import { AnchorWallet } from "@solana/wallet-adapter-react"
import { Address } from "@project-serum/anchor"
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import config from "@/config"

export interface Wrapper {
    connection: Connection,
    wallet: AnchorWallet | undefined,
    programId: Address,
}

export const createCounter = async ({ connection, programId, wallet}: Wrapper, user: anchor.web3.PublicKey | null) => {
    
    // console.log('Connected to network:', connection.rpcEndpoint);

    if (!wallet || !user) throw new WalletNotConnectedError();

    console.log('Wallet Public Key:', wallet.publicKey.toBase58()); // Log the public key of the wallet
    // console.log(PublicKey.isOnCurve(wallet.publicKey)); //true

    console.log('User Public Key:', user.toBase58()); // Log the public key of the wallet

    const program = await getProgram(connection, wallet, programId, config.counterIdl)
    console.log('program.programId:', program.programId.toBase58()); // Log the Program ID

    const [userCounterPDA, nonce] = anchor.web3.PublicKey.findProgramAddressSync(
        [
            anchor.utils.bytes.utf8.encode("counter"),
            wallet.publicKey.toBuffer(),
        ],
        program.programId
    );

    console.log('userCounterPDA:', userCounterPDA.toBase58())
    // console.log(PublicKey.isOnCurve(userCounterPDA.toString())); // false
    console.log('Nonce:', nonce);
    
    const hash = await program.methods
        .initialize()
        .accounts({
            set: userCounterPDA,
            user: wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc()

    console.log('Transaction hash:', hash);

    // Fetch the account data after the account has been initialized
    const accountData = await program.account.counter.fetch(userCounterPDA);
    console.log('Counter account data:', accountData);    

    return { hash, pubKey: userCounterPDA }
}


export const increaseCounter = async ({
    connection,
    wallet,
    programId,
}: Wrapper, counterKey: Address, number: anchor.BN) => {
    if (!wallet) throw new WalletNotConnectedError();
    const program = await getProgram(connection, wallet, programId, config.counterIdl)

    const hash = await program.methods
        .increaseCounter(new anchor.BN(number))
        .accounts({
            set: counterKey,
        })
        .rpc()
    return hash
}

export const decreaseCounter = async ({
    connection, wallet, programId
}: Wrapper, counterKey: Address, number: anchor.BN) => {
    if (!wallet) throw new WalletNotConnectedError();
    const program = await getProgram(connection, wallet, programId, config.counterIdl)

    const hash = await program.methods
        .decreaseCounter(new anchor.BN(number))
        .accounts({
            set: counterKey,
        })
        .rpc()
    return hash
}

export const closeCounter = async ({
    connection, wallet, programId
}: Wrapper, counterKey: Address) => {
    if (!wallet) throw new WalletNotConnectedError();
    const program = await getProgram(connection, wallet, programId, config.counterIdl)

    const hash = await program.methods
        .closeCounterPda()
        .accounts({
            set: counterKey,
            user: wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc()
    return hash
}


