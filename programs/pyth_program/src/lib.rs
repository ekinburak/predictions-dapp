use anchor_lang::prelude::*;
use pyth_sdk_solana::state::{SolanaPriceAccount, PriceFeed};
use pyth_sdk_solana::{load_price_feed_from_account_info};
use std::str::FromStr;

declare_id!("H5nL65iizvdw1KRYpjGGxq2eMhTBCw87GCfsPeJozmqx");

const BTC_USDC_FEED: &str = "HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J";
const STALENESS_THRESHOLD: u64 = 60; // staleness threshold in seconds


#[program]
mod hello_pyth {
    use super::*;
    pub fn fetch_btc_price(ctx: Context<FetchBitcoinPrice>) -> Result<()> {

        // 1-Fetch latest price
        let price_account_info = &ctx.accounts.price_feed;
        let price_feed = SolanaPriceAccount::account_info_to_feed( &price_account_info ).unwrap();
        let current_timestamp = Clock::get()?.unix_timestamp;
        let current_price = price_feed.get_price_no_older_than(current_timestamp, STALENESS_THRESHOLD).unwrap();

        // 2-Format display values rounded to the nearest dollar
        let display_price = u64::try_from(current_price.price).unwrap() / 10u64.pow(u32::try_from(-current_price.expo).unwrap());
        let display_confidence = u64::try_from(current_price.conf).unwrap() / 10u64.pow(u32::try_from(-current_price.expo).unwrap());

        // 3-Log result
        msg!("BTC/USD price: ({} +- {})", display_price, display_confidence);

        Ok(())
    }
}


#[derive(Accounts)]
pub struct FetchBitcoinPrice<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(address = Pubkey::from_str(BTC_USDC_FEED).unwrap() @ FeedError::InvalidPriceFeed)]
    pub price_feed: AccountInfo<'info>,
}

#[error_code]
pub enum FeedError {
    #[msg("Invalid Price Feed")]
    InvalidPriceFeed,
}