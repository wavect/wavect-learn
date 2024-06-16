import {Hbar, Client, PrivateKey, AccountBalanceQuery, AccountCreateTransaction} from "@hashgraph/sdk";
import {createClient} from "./create-client.js";

require("dotenv").config();

const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

export const createAccount = async () => {
    const client = createClient();
    // Create new keys
    const newAccountPrivateKey = PrivateKey.generateED25519();
    const newAccountPublicKey = newAccountPrivateKey.publicKey;

    // Create a new account with 1,000 tinybar starting balance
    const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(1000))
        .execute(client);

    // Get the new account ID
    const getReceipt = await newAccount.getReceipt(client);
    const newAccountId = getReceipt.accountId;

    console.log("\nNew account ID: " + newAccountId);

    await wait(5);

    // Verify the account balance
    const accountBalance = await new AccountBalanceQuery()
        .setAccountId(newAccountId)
        .execute(client);

    console.log(
        "The new account balance is: " +
        accountBalance.hbars.toTinybars() +
        " tinybar."
    );

    return {
        accountBalance,
        newAccountId
    };
}