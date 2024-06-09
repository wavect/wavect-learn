import {getClient} from "../functions/create-client.js";
import {createAccount} from "../functions/create-account.js";
import {Hbar} from "@hashgraph/sdk";
import {createTransaction} from "../functions/create-transaction.js";

describe('Hedera tests', () => {
    it('should create the environment', () => {
        process.env.MY_ACCOUNT_ID = '0.0.4422584'
        process.env.MY_PRIVATE_KEY = '3030020100300706052b8104000a04220420b0188253c6fc175ad4ead53b4ab28349f45c44b1153232aac19d965918cc625b'

        const client = getClient();
        expect(client).toBeDefined();
    });

    it("should create a new account with a balance", async () => {
        const {
            accountBalance,
            newAccountId
        } = await createAccount()

        expect(accountBalance.hbars).toEqual(Hbar.fromTinybars(1000))
        expect(newAccountId.toString()).toContain('0.0')
    }, 15_000)


    it('should send some Hbars to another accountId', async () => {
        const txRes = await createTransaction( '0.0.4430384')
        expect(txRes.status.toString()).toEqual("SUCCESS")
    });
});