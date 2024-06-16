import {Hbar, TransferTransaction} from "@hashgraph/sdk";
import {createClient} from "./create-client.js";

export const createTransaction = async (toAddress) => {
    const client = createClient();

    const myAccountId = process.env.MY_ACCOUNT_ID;

    const sendHbar = await new TransferTransaction()
        .addHbarTransfer(myAccountId, Hbar.fromTinybars(-10)) //Sending account
        .addHbarTransfer(toAddress, Hbar.fromTinybars(10)) //Receiving account
        .execute(client);

    return await sendHbar.getReceipt(client);
}