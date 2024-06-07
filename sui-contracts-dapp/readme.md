### SUI: How to

Install:
> brew install sui

Check if successful: 
> which sui

build 
> sui move build


## How to deploy 

1. build it
> sui move build

2. deploy it to testnet
> sui client publish --gas-budget 100000000

You will receive an output like this:

╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                                        │
│  ┌──                                                                                                                    │
│  │ ObjectID: 0x044f7c845f9c3f73751acfb27f8bec037820d3dda0e95166077507e62ed820b6                                         │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                           │
│  │ Owner: Immutable                                                                                                     │
│  │ ObjectType: 0x2::coin::CoinMetadata<0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1::coin::COIN>  │
│  │ Version: 1124251                                                                                                     │
│  │ Digest: 7Ecx9jn2imn9weXJb8fgMuopW7GHvqGjUCksbnrkU4tL                                                                 │
│  └──                                                                                                                    │
│  ┌──                                                                                                                    │
│  │ ObjectID: 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719                                         │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                           │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )                        │
│  │ ObjectType: 0x2::coin::TreasuryCap<0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1::coin::COIN>   │
│  │ Version: 1124251                                                                                                     │
│  │ Digest: 6KYJnYExqfWXWRAsdAGvwmpuAdrNrGD7F96rpnv22PNU                                                                 │
│  └──                                                                                                                    │
│  ┌──                                                                                                                    │
│  │ ObjectID: 0xc9be87714a250a2d6737e06d6ae1a10aff1a203d7938aecbf60e05c7505b6f4f                                         │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                           │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )                        │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                                 │
│  │ Version: 1124251                                                                                                     │
│  │ Digest: AAWN3mhJPcQT7iRN1Vi6zapgZSFZpxSXbqWUnRyTKq8T                                                                 │
│  └──                                                                                                                    │
│ Mutated Objects:                                                                                                        │
│  ┌──                                                                                                                    │
│  │ ObjectID: 0xfd00d17cb7d370dbc74b6d1198869f644d066799917fa2a69674be89438bb827                                         │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                           │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )                        │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                           │
│  │ Version: 1124251                                                                                                     │
│  │ Digest: FV31S5SrtWWSDoW6LSBWi4FdCiED9qLmxMdTnWvoZBWM                                                                 │
│  └──                                                                                                                    │
│ Published Objects:                                                                                                      │
│  ┌──                                                                                                                    │
│  │ PackageID: 0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1                                        │
│  │ Version: 1                                                                                                           │
│  │ Digest: AkgpYURoYTtKXU76z5PSzVgCffrFYnXnMmnuAdE1v2Zt                                                                 │
│  │ Modules: coin                                                                                                        │
│  └──                                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯


3. Call mint_and_transfer

check the output from above and copy the values

- publishedPackageID (this is the address of your contract, on SUI contracts are called packages)
- createdTreasuryCapID (this is the row with ObjectType TreasuryCap)
- recipientAddress (any address of your own)


Raw Query with placeholders

```
sui client call --package <publishedPackageID> --module coin --function mint_and_transfer --args <createdTreasuryCapID> 10 <recipientAddress>--gas-budget 10000000
```

An example Query

```
 sui client call 
 --package 0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1  
 --module coin 
 --function mint_and_transfer 
 --args 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719 10 0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3 
  --gas-budget 10000000
```

This will print the output


jocr@MBP sources % sui client call --package 0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1  --module coin --function mint_and_trans
fer --args 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719 10 0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3  --gas-budget 10000000

Transaction Digest: GmSFatJXZXEZ7xFbiio6KSNFdH2QNAzEgUraWkkQuqGb
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Data                                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                   │
│ Gas Owner: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                │
│ Gas Budget: 10000000 MIST                                                                                    │
│ Gas Price: 1000 MIST                                                                                         │
│ Gas Payment:                                                                                                 │
│  ┌──                                                                                                         │
│  │ ID: 0xfd00d17cb7d370dbc74b6d1198869f644d066799917fa2a69674be89438bb827                                    │
│  │ Version: 1124252                                                                                          │
│  │ Digest: GoTZUSMruAGEkuU6jhiM5x7XwXaydA2RCJXFcwV3aBaK                                                      │
│  └──                                                                                                         │
│                                                                                                              │
│ Transaction Kind: Programmable                                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Input Objects                                                                                            │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 0   Imm/Owned Object ID: 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719              │ │
│ │ 1   Pure Arg: Type: u64, Value: "10"                                                                     │ │
│ │ 2   Pure Arg: Type: address, Value: "0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3" │ │
│ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│ ╭──────────────────────────────────────────────────────────────────────────────────╮                         │
│ │ Commands                                                                         │                         │
│ ├──────────────────────────────────────────────────────────────────────────────────┤                         │
│ │ 0  MoveCall:                                                                     │                         │
│ │  ┌                                                                               │                         │
│ │  │ Function:  mint_and_transfer                                                  │                         │
│ │  │ Module:    coin                                                               │                         │
│ │  │ Package:   0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1 │                         │
│ │  │ Arguments:                                                                    │                         │
│ │  │   Input  0                                                                    │                         │
│ │  │   Input  1                                                                    │                         │
│ │  │   Input  2                                                                    │                         │
│ │  └                                                                               │                         │
│ ╰──────────────────────────────────────────────────────────────────────────────────╯                         │
│                                                                                                              │
│ Signatures:                                                                                                  │
│    +mIRg0kNA1k96Ma5mg7S6ObyuJI1LJo2GvUFr+87VzPIO7s1fYUPo7VogzfJiulUGrNnjsSFuPUzVZ6pJGUGCg==                  │
│                                                                                                              │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Effects                                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Digest: GmSFatJXZXEZ7xFbiio6KSNFdH2QNAzEgUraWkkQuqGb                                              │
│ Status: Success                                                                                   │
│ Executed Epoch: 394                                                                               │
│                                                                                                   │
│ Created Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x2a0bf0708cc8db57676d989962f504fd406366af0941de5d8c0ae2afa501e6cd                         │
│  │ Owner: Account Address ( 0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3 )  │
│  │ Version: 1124253                                                                               │
│  │ Digest: 54D5wwTUUbNJk27nhn7MAaAYXAdvCcbNnv8pvgShutHY                                           │
│  └──                                                                                              │
│ Mutated Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719                         │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )  │
│  │ Version: 1124253                                                                               │
│  │ Digest: HBJXWVEPbU1M8ETUG1FcyiY9DWZtZMVciVqyTPtj8sk5                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0xfd00d17cb7d370dbc74b6d1198869f644d066799917fa2a69674be89438bb827                         │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )  │
│  │ Version: 1124253                                                                               │
│  │ Digest: 3yg3T8oC3hrWEQqdKcJtFQTCzpHU1m62MVdyubhJ4Skk                                           │
│  └──                                                                                              │
│ Gas Object:                                                                                       │
│  ┌──                                                                                              │
│  │ ID: 0xfd00d17cb7d370dbc74b6d1198869f644d066799917fa2a69674be89438bb827                         │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )  │
│  │ Version: 1124253                                                                               │
│  │ Digest: 3yg3T8oC3hrWEQqdKcJtFQTCzpHU1m62MVdyubhJ4Skk                                           │
│  └──                                                                                              │
│ Gas Cost Summary:                                                                                 │
│    Storage Cost: 4012800 MIST                                                                     │
│    Computation Cost: 1000000 MIST                                                                 │
│    Storage Rebate: 2663496 MIST                                                                   │
│    Non-refundable Storage Fee: 26904 MIST                                                         │
│                                                                                                   │
│ Transaction Dependencies:                                                                         │
│    sSQ8yhV556xf4sw454W88DShyHSDPKYLa3traNBE3rZ                                                    │
│    FNBsj2Je22PrkEUs45v1V9v9qg38wvJDLu3B5H13KZLu                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
╭─────────────────────────────╮
│ No transaction block events │
╰─────────────────────────────╯

╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                                         │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                                       │
│  ┌──                                                                                                                   │
│  │ ObjectID: 0x2a0bf0708cc8db57676d989962f504fd406366af0941de5d8c0ae2afa501e6cd                                        │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                          │
│  │ Owner: Account Address ( 0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3 )                       │
│  │ ObjectType: 0x2::coin::Coin<0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1::coin::COIN>         │
│  │ Version: 1124253                                                                                                    │
│  │ Digest: 54D5wwTUUbNJk27nhn7MAaAYXAdvCcbNnv8pvgShutHY                                                                │
│  └──                                                                                                                   │
│ Mutated Objects:                                                                                                       │
│  ┌──                                                                                                                   │
│  │ ObjectID: 0x60711ba14f23c3e663420c273b985220b8048066a9cc09233deeb13a46ed5719                                        │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                          │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )                       │
│  │ ObjectType: 0x2::coin::TreasuryCap<0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1::coin::COIN>  │
│  │ Version: 1124253                                                                                                    │
│  │ Digest: HBJXWVEPbU1M8ETUG1FcyiY9DWZtZMVciVqyTPtj8sk5                                                                │
│  └──                                                                                                                   │
│  ┌──                                                                                                                   │
│  │ ObjectID: 0xfd00d17cb7d370dbc74b6d1198869f644d066799917fa2a69674be89438bb827                                        │
│  │ Sender: 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76                                          │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )                       │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                          │
│  │ Version: 1124253                                                                                                    │
│  │ Digest: 3yg3T8oC3hrWEQqdKcJtFQTCzpHU1m62MVdyubhJ4Skk                                                                │
│  └──                                                                                                                   │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Balance Changes                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                              │
│  │ Owner: Account Address ( 0x46a22e24f8b36763c172f8ac4fc00b2cb1981d2e81b4336ec2d27c0cb3bf56b3 )  │
│  │ CoinType: 0xdfd2b7c284801b4b945ab4d9f108700ead8181264fb27058d68d12a8d0952ee1::coin::COIN       │
│  │ Amount: 10                                                                                     │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ Owner: Account Address ( 0xc93076fb250a5cf064a4b9febfc267d86ac7555a65c8820cb91abbf3fd56dd76 )  │
│  │ CoinType: 0x2::sui::SUI                                                                        │
│  │ Amount: -2349304                                                                               │
│  └──                                                                                              │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯


Now check the explorer: 

https://suiscan.xyz/testnet/object/0x2a0bf0708cc8db57676d989962f504fd406366af0941de5d8c0ae2afa501e6cd