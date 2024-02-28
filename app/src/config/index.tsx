// app/src/config/index.tsx

import { Idl } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

const priceFeedIdl = {"version":"0.1.0","name":"pyth_price_feed","instructions":[{"name":"createPriceAccount","accounts":[{"name":"priceAccount","isMut":true,"isSigner":false},{"name":"payer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"priceFeedKey","type":"publicKey"}]},{"name":"updatePriceAccount","accounts":[{"name":"pythPriceFeed","isMut":false,"isSigner":false},{"name":"priceAccount","isMut":true,"isSigner":false},{"name":"signer","isMut":false,"isSigner":true}],"args":[{"name":"pythPriceFeedKey","type":"publicKey"}]}],"accounts":[{"name":"PriceAccount","type":{"kind":"struct","fields":[{"name":"pythPriceFeedKey","type":"publicKey"},{"name":"price","type":"u64"},{"name":"confidence","type":"u64"},{"name":"lastUpdated","type":"i64"}]}}],"errors":[{"code":6000,"name":"InvalidPriceFeedKey","msg":"Invalid Price Feed Key!"}]}

const BTC_USD_priceFeedPublicKey = "HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J"
const PRICE_ACCOUNT_SEED = "priceAccount"

export default {
    priceFeedKey: BTC_USD_priceFeedPublicKey, // Assuming this is the public key for the price feed program
    PRICE_ACCOUNT_SEED,
    priceFeedProgramId: new PublicKey('EhMygAzvgyEMeu7cH1hpcavMCgWPeo1JuCebdM4nVATY'),
    priceFeedIdl: priceFeedIdl as Idl,
}

