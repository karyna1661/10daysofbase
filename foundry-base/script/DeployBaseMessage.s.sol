// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {BaseMessage} from "../src/BaseMessage.sol";

contract DeployBaseMessage is Script {
    BaseMessage public baseMessage;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Deploy the BaseMessage contract
        baseMessage = new BaseMessage();

        vm.stopBroadcast();

        // Log the deployed contract address
        console.log("BaseMessage deployed to:", address(baseMessage));
    }
}
