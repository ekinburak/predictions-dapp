import config from "@/config";
import { BN, Program } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey, TransactionInstruction } from "@solana/web3.js";
import { sendAndConfirmTransaction, Transaction, SystemProgram } from "@solana/web3.js";
import { sha256 } from "js-sha256";

// Assuming `config.myOracleIdl` and `config.myOracleProgramId` are correctly configured
export const createOraclePdaUsingAnchor = async (keypair: Keypair, connection: Connection, name: string) => {
    const pg = new Program(config.myOracleIdl, config.myOracleProgramId, { connection });

    // Generate the PDA for the dataStore account
    const [dataStorePda, ] = await PublicKey.findProgramAddress(
        [Buffer.from("oracle"), keypair.publicKey.toBuffer()],
        pg.programId
    );

    const instruction = await pg.methods
        .initialize(name)
        .accounts({
            user: keypair.publicKey,
            dataStore: dataStorePda,
            systemProgram: SystemProgram.programId,
        })
        .signers([keypair])
        .instruction();

    console.log(instruction);

    const transaction = new Transaction().add(instruction);
    const hash = await sendAndConfirmTransaction(connection, transaction, [keypair]);
    return hash;
};

export const createOraclePdaManually = async (keypair: Keypair, connection: Connection) => {
    const pda = Keypair.generate();
    const keys = [
        { pubkey: pda.publicKey, isSigner: false, isWritable: true },
        { pubkey: keypair.publicKey, isSigner: true, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }
    ];

    // Define the fixed instruction identifier
    const name = 'global:initialize';
    const instructionIdentifier = Buffer.from(sha256.digest(name)).subarray(0, 8)

    let transaction = new Transaction();
    transaction.add(
        new TransactionInstruction({
            keys,
            programId: config.myOracleProgramId,
            data: instructionIdentifier
        }),
    );

    const hash = await sendAndConfirmTransaction(connection, transaction, [keypair, pda])
    return { hash, pda }
}

export const writeData = async (pda: PublicKey, keypair: Keypair, connection: Connection, price: number) => {
    const pg = new Program(config.myOracleIdl, config.myOracleProgramId, { connection })

    const instruction = await pg.methods
        .update(new BN(price))
        .accounts({
            user: keypair.publicKey,
            dataStore: pda,
        })
        .signers([keypair])
        .instruction()

    const transaction = new Transaction();
    transaction.add(instruction);

    const hash = await sendAndConfirmTransaction(connection, transaction, [keypair])

    return hash
}

export type DataStore = {
    name: string,
    data: number
}
