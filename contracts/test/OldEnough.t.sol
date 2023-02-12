// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;

import "forge-std/Test.sol";
import "forge-std/console2.sol";
import "../src/OldEnough.sol";
import "../src/verifier.sol";

contract OldEnoughTest is Test {
    Verifier verifier;
    OldEnough oldEnough;
    address constant OWNER = address(0x14791697260E4c9A71f18484C9f997B308e59325);

    function setUp() public {

        vm.startPrank(OWNER);

        verifier = new Verifier();
        oldEnough = new OldEnough(address(verifier));

        vm.stopPrank();

    }

    function testOldEnoughValid() public {
        Verifier.Proof memory proof = Verifier.Proof({
        a : Pairing.G1Point({X : 0x1dc9822226e4189ecc4a0005bd39c765de3f5abff68b09e90ee163698e875e72, Y : 0x029dcdf0f0454db4c2b5b30ee761db727f87e14601a41369a242bf72ee22f7d9}),
        b : Pairing.G2Point({
        X : [
            0x25420e2595206c3e9a4601568cb083e8c53c4ad46abcec3a5062baaa47bc4d2c,
            0x046dfe0bf495dcac6c593370515295da4acf5b9bc93418ed73670fb4c1f2e537
            ],
        Y : [
            0x2826c7aeb79ae8ae015dd433c2fd974d70de4c6fb3cf894fc59212fcf69b7ba5,
            0x0c8a9cb57b24994481c7d8e2750eb6d281616cc1da04eb81ab35da0f6e9c6716
            ]
        }),
        c : Pairing.G1Point({
            X : 0x281b0c526918b695986bf8f893cd251740715efa9e8703ce12ccf88b12396479,
            Y : 0x2b38a8970bbcabe6ddf6d82271a1cba722038274df9a503988fbb34cfa58a478
        })
        });

        oldEnough.verifyAge(proof);
    }

    function testOldEnoughValidDAppGenerated() public {
        Verifier.Proof memory proof = Verifier.Proof({
        a : Pairing.G1Point({X : 0x1106674e0ede798bd4134bf57da55f39051ac629b8cbd7dd9235a33f50c256c9, Y : 0x1ed7415b90687103bb0c1ef368e6dbcad472f8c2cba6f9e7edb2d0722e5f2d48}),
        b : Pairing.G2Point({
        X : [
            0x272956514252c23579447fca55be0f89749ae5058f0b7ec459c93e5b77e4e22f,
            0x056c6250647b7161784862c84f78fc36a56115fc27e36519bfc4508cb0f90068
            ],
        Y : [
            0x1bbde5dfe07f68cd5b9b6c42adcfae4728010f46636343a5a80a3e7ed4cf835c,
            0x2223a02f9e76065090e9ed4605e45c7323c44d631c37a75aeec8ba6e46c5483e
            ]
        }),
        c : Pairing.G1Point({
            X : 0x15658cfe901be3b0d5ad4302d7e0c13abdca3f06c25a42dca7d0444401f78f3b,
            Y : 0x2260cbe6367d4c8117e161b8d557b720b8a2106cd87afd78503c3963aae0112d
        })
        });

        oldEnough.verifyAge(proof);
    }

    function testOldEnoughInvalid() public {
        Verifier.Proof memory proof = Verifier.Proof({
        a : Pairing.G1Point({X : 0x1dc9822226e4189ecc4a0005bd39c765de3f5abff68b09e90ee163698e875e72, Y : 0x029dcdf0f0454db4c2b5b30ee761db727f87e14601a41369a242bf72ee22f7d9}),
        b : Pairing.G2Point({
        X : [
            0x25420e2595206c3e9a4601568cb083e8c53c4ad46abcec3a5062baaa47bc4d2c,
            0x046dfe0bf495dcac6c593370515295da4acf5b9bc93418ed73670fb4c1f2e537
            ],
        Y : [
            0x2826c7aeb79ae8ae015dd433c2fd974d70de4c6fb3cf894fc59212fcf69b7ba5,
            0x0c8a9cb57b24994481c7d8e2750eb6d281616cc1da04eb81ab35da0f6e9c6716
            ]
        }),
        c : Pairing.G1Point({
        X : 0x1dc9822226e4189ecc4a0005bd39c765de3f5abff68b09e90ee163698e875e72,
        Y : 0x029dcdf0f0454db4c2b5b30ee761db727f87e14601a41369a242bf72ee22f7d9
        })
        });

        // Note: Pairs need to match, otherwise verifier function reverts by itself even without require in the contract.
        vm.expectRevert("Not old enough");
        oldEnough.verifyAge(proof);
    }
}