// app/src/config/index.tsx

import { Idl } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

const priceFeedIdl = {"version":"0.1.0","name":"pyth_price_feed","instructions":[{"name":"createPriceAccount","accounts":[{"name":"priceAccount","isMut":true,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"priceFeedKey","type":"publicKey"}]},{"name":"updatePriceAccount","accounts":[{"name":"pythPriceFeed","isMut":false,"isSigner":false},{"name":"priceAccount","isMut":true,"isSigner":false}],"args":[{"name":"pythPriceFeedKey","type":"publicKey"}]}],"accounts":[{"name":"PriceAccount","type":{"kind":"struct","fields":[{"name":"pythPriceFeedKey","type":"publicKey"},{"name":"price","type":"u64"},{"name":"confidence","type":"u64"},{"name":"lastUpdated","type":"i64"}]}}],"errors":[{"code":6000,"name":"InvalidPriceFeedKey","msg":"Invalid Price Feed Key!"}]}
const predictionsBetIdl = { "version": "0.1.0", "name": "prediction_dapp", "instructions": [{ "name": "createMaster", "accounts": [{ "name": "master", "isMut": true, "isSigner": false }, { "name": "payer", "isMut": true, "isSigner": true }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [] }, { "name": "createBet", "accounts": [{ "name": "bet", "isMut": true, "isSigner": false }, { "name": "master", "isMut": true, "isSigner": false }, { "name": "player", "isMut": true, "isSigner": true }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [{ "name": "amount", "type": "u64" }, { "name": "price", "type": "f64" }, { "name": "duration", "type": "u32" }, { "name": "pythPriceKey", "type": "publicKey" }] }, { "name": "enterBet", "accounts": [{ "name": "bet", "isMut": true, "isSigner": false }, { "name": "player", "isMut": true, "isSigner": true }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [{ "name": "price", "type": "f64" }] }, { "name": "claimBet", "accounts": [{ "name": "bet", "isMut": true, "isSigner": false }, { "name": "pyth", "isMut": false, "isSigner": false }, { "name": "playerA", "isMut": true, "isSigner": false }, { "name": "playerB", "isMut": true, "isSigner": false }, { "name": "signer", "isMut": true, "isSigner": true }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [] }, { "name": "closeBet", "accounts": [{ "name": "bet", "isMut": true, "isSigner": false }, { "name": "player", "isMut": true, "isSigner": true }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [] }], "accounts": [{ "name": "Master", "type": { "kind": "struct", "fields": [{ "name": "lastBetId", "type": "u64" }] } }, { "name": "Bet", "type": { "kind": "struct", "fields": [{ "name": "id", "type": "u64" }, { "name": "amount", "type": "u64" }, { "name": "predictionA", "type": { "defined": "BetPrediction" } }, { "name": "predictionB", "type": { "option": { "defined": "BetPrediction" } } }, { "name": "state", "type": { "defined": "BetState" } }, { "name": "pythPriceKey", "type": "publicKey" }, { "name": "expiryTs", "type": "i64" }] } }], "types": [{ "name": "BetPrediction", "type": { "kind": "struct", "fields": [{ "name": "player", "type": "publicKey" }, { "name": "price", "type": "f64" }] } }, { "name": "BetState", "type": { "kind": "enum", "variants": [{ "name": "Created" }, { "name": "Started" }, { "name": "PlayerAWon" }, { "name": "PlayerBWon" }, { "name": "Draw" }] } }], "errors": [{ "code": 6000, "name": "CannotEnter", "msg": "You can not enter this bet!!" }, { "code": 6001, "name": "CannotClaim", "msg": "You can not claim this bet!!" }, { "code": 6002, "name": "CannotClose", "msg": "You can not close this bet!!" }, { "code": 6003, "name": "InvalidPythKey", "msg": "Given key for the PYTH account does not match!" }, { "code": 6004, "name": "InvalidPythAccount", "msg": "Invalid PYTH account!" }, { "code": 6005, "name": "PriceTooBig", "msg": "Price is too big to parse to u32!" }] }

const BTC_USD_priceFeedPublicKey = "HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J"
const PRICE_ACCOUNT_SEED = "priceAccount"

const MASTER_ACCOUNT_SEED = "master"
const BET_ACCOUNT_SEED = "bet"

export default {
    priceFeedKey: BTC_USD_priceFeedPublicKey, // Assuming this is the public key for the price feed program
    PRICE_ACCOUNT_SEED,
    MASTER_ACCOUNT_SEED,
    BET_ACCOUNT_SEED,
    priceFeedProgramId: new PublicKey('EhMygAzvgyEMeu7cH1hpcavMCgWPeo1JuCebdM4nVATY'),
    predictionsBetProgramId: new PublicKey('FoWRzEh9DhZywGCnCtK41AR4TmW9RH6Zvt5XcrB6soKr'),
    priceFeedIdl: priceFeedIdl as Idl,
    predictionsBetIdl : predictionsBetIdl as Idl,
}

