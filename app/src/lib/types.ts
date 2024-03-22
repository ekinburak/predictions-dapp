// app/src/lib/types.ts

import { BN } from '@project-serum/anchor';

export interface Prediction {
    player: string;
    price: number;
}

export type BetState = {
    [key: string]: any;
}

// IBetAccount represents the structure of an individual betting account on the blockchain.
export interface IBetAccount {
    id: BN;
    amount: BN;
    pythPriceKey: string;
    predictionA: Prediction;
    predictionB?: Prediction;
    expiryTs: BN;
    state: BetState;
}

// Bet represents the broader concept of a betting opportunity or event visible to users.
export interface Bet {
    id: string;
    pair: string;
    potVolume: number;
    duration: number;
    status: string;
    state?: BetState;
    predictionA?: Prediction;
    predictionB?: Prediction;
    expiryTs: number;
}
