use std::time::Duration;
use ethers:: {
    prelude::{Address, LocalWallet, Middleware, Provider, Signer, TransactionRequest, U256},
    utils::Ganache
};
use eyre::{ContextCompat, Result};
use hex::ToHex;

#[tokio::main]
async fn main() -> Result<()> {

    // boot ganache endpoint
    let mnemonic = "scatter sign valve balance outside hole judge genre recycle ozone expose monitor";
    let ganache = Ganache::new().mnemonic(mnemonic).spawn();
    println!("HTTP Endpoint: {}", ganache.endpoint());

    // get the wallet
    let wallet: LocalWallet = ganache.keys()[0].clone().into();
    let first_address = wallet.address();
    println!("First Address Wallet: {}", first_address.encode_hex::<String>());

    // get the provider
    let provider = Provider::try_from(ganache.endpoint())?.interval(Duration::from_millis(10));

    // print balances
    let first_balance = provider.get_balance(first_address, None).await?;
    println!("Balance of first address: {}", first_balance);

    let second_address_hex = "0x89c1B1ee3740510E59C4f2975b09Cb103E3b2b73";
    let second_address = "0x89c1B1ee3740510E59C4f2975b09Cb103E3b2b73".parse::<Address>()?;
    let second_balance = provider.get_balance(second_address, None).await?;
    println!("Balance of {}: {}", second_address_hex, second_balance);

    let tx = TransactionRequest::pay(second_address, U256::from(1000u64)).from(first_address);

    let receipt = provider
        .send_transaction(tx, None)
        .await?
        .log_msg("Pending transfer")
        .confirmations(1)
        .await?
        .context("Missing receipt")?;

    println!("TX mined in block, {}", receipt.block_number.context("cannot get block number")?);
    println!("Balance of {}:{}",
             second_address_hex,
             provider.get_balance(second_address, None).await?
    );

    Ok(())
}