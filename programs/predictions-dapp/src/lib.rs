use anchor_lang::prelude::*;

declare_id!("4Fh9X5RA3NiTe5TRSUXZsR354q2Dt2V9vA7Pu9P5VUb4");

#[program]
pub mod predictions_dapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
