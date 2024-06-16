import {AccountBalanceQuery} from "@hashgraph/sdk";
import {createClient} from "./create-client.js";

export const createQueryChainData = async () => {
    const client = createClient();
    const myAccountId = process.env.MY_ACCOUNT_ID;

    //Request the cost of the query
    const queryCost = await new AccountBalanceQuery()
        .setAccountId(myAccountId)
        .getCost(client);

    console.log("The cost of query is: " +queryCost);

    //Check the new account's balance
    const getNewBalance = await new AccountBalanceQuery()
        .setAccountId(myAccountId)
        .execute(client);

    console.log("The account balance after the transfer is: " +getNewBalance.hbars.toTinybars() +" tinybar.")
    return {
        queryCost,
        getNewBalance
    }
}