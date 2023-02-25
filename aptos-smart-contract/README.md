# Creating Contracts on Aptos with Move and Rust

## Let's go

Aptos is a Layer 1 blockchain that allows developers to create their smart-contracts in Move language.
Aptos is focused on delivering the safest and most production-ready Layer 1 blockchain in the world. The team is
comprised of the original creators, researchers, designers, and builders of Diem, the blockchain that was first built at
Meta.
The key components of Aptos are AptosBFT consensus and the new Move language which allows developers to build safe and
scalable decentralized applications.
With this tutorial you will start learning Move language and create your first smart contract for Aptos.

Move
Move is a smart-contract language created with a heavy focus on security. Built on Rust, it inherits features that
prevent developers from inadvertently introducting critical vulnerabilities.
The key feature of Move is the ability to define custom resource types with semantics inspired by linear logic. A
resource can never be copied, double spent or implicitly discarded, only moved between program storage locations. These
safety guarantees are enforced statically by Move’s type system.
You can read the Move whitepaper
here: https://developers.diem.com/papers/diem-move-a-language-with-programmable-resources/2019-06-18.pdf
In this tutorial, we're going to create a simple module that allows users to store their username in the blockchain.
This will allow us to explore unique features of Move and prepare for more complex projects.

## Install Aptops

https://github.com/aptos-labs/aptos-core/releases

or use this powershell command

> iwr "https://aptos.dev/scripts/install_cli.py" -useb | Select-Object -ExpandProperty Content | python3

The result will contain a command to add it to your PATH var. Aptos is now ready to be called

## fetch from Aptos

> aptos move compile

Shoud end with:

> {\
> "Result": []\
> }

fetched dependencies are stored inside build/ dir

## initialize account

Initialize an Aptos account, you can keep everything at default, aptos will create your private key and public key.
You can view your generated account credentials in .aptos/config.yaml

> aptos init

After your credentials are set up, copy the address from your config file and replace the sender in the Move.toml file
with your newly generated address

After this is done, we can deploy your contract

> { \
> "Result": { \
> "transaction_hash": "0x2a4574969b7b84c1b53f0373d5451c2a406240e3add024aa8561c2ead1c5004e", \
> "gas_used": 7605, \
> "gas_unit_price": 100, \
> "sender": "bbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00", \
> "sequence_number": 0, \
> "success": true, \
> "timestamp_us": 1677345575804585, \
> "version": 5578686, \
> "vm_status": "Executed successfully" \
> } \
> }

If you've received a similar result, success!

Sending a transaction via CLI to the aptos blockchain. The address below is the account aptos has created for you.

> aptos move run --function-id 0xbbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00::user_info::
> set_username --args string:"JOCR"

You'll receive something similar:

> { \
"Result": { \
"transaction_hash": "0xd9455ab7648dafa1fe11c757e64ee7baf225f534f74430cd1006d443535ab6ba", \
"gas_used": 699, \
"gas_unit_price": 100, \
"sender": "bbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00", \
"sequence_number": 1, \
"success": true, \
"timestamp_us": 1677345797264841, \
"version": 5580767, \
"vm_status": "Executed successfully" \
> } \
> }

Now you can query your transaction here (replace the address with your own):
> https://fullnode.devnet.aptoslabs.com/v1/accounts/0xbbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00/resource/0xbbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00::user_info::UserProfile

returns:

> {\
> "type": "0xbbc657e79d1b1d5efcf592566bd763569e9d9852306125c5e027f4ed898ceb00::user_info::UserProfile",\
> "data": {\
> "username": "JOCR"\
> }\
> }