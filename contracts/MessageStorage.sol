/ SPDX-License-Identifier: MIT

pragma solidity 0.8.20;


contract MessageStorage {
    string private message;
    address private admin;

    constructor(string memory initialMessage) {
        message = initialMessage;
        admin = msg.sender; // Set admin as the deployer of the contract
    }

    function getMessage() external view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) external {
        require(msg.sender == admin, "Only admin can set the message");
        message = newMessage;
    }
}