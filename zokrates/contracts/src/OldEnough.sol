// SPDX-License-Identifier: UNLICENSED
/*
* This code must not be forked, replicated, modified or used by any other entity or person without explicit approval of Wavect GmbH.
* Website: https://wavect.io
* E-Mail: office@wavect.io
*/
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Multicall.sol";
import "./verifier.sol";

contract OldEnough is Multicall {

    Verifier public verifier;

    constructor(address verifier_) {
        verifier = Verifier(verifier_);
    }

    function verifyAge(Verifier.Proof memory proof) external {
        require(verifier.verifyTx(proof), "Not old enough");
    }

}