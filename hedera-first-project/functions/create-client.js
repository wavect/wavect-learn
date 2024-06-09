import {Hbar, Client,} from "@hashgraph/sdk";

export const getClient = () => {
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    // If we weren't able to grab it, we should throw a new error
    if (myAccountId == null || myPrivateKey == null) {
        throw new Error(
            "Environment variables myAccountId and myPrivateKey must be present"
        );
    }

    // Create your connection to the Hedera Network
    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);
    client.setDefaultMaxTransactionFee(new Hbar(100));
    client.setMaxQueryPayment(new Hbar(50));

    return client;
}