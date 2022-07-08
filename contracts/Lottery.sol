//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Lottery {
    address public manager;
    address[] public players;

    //hmm so take usdc or eth and borrow against?

    //as long as i keep putting in 3-5 hrss a day i'll get good as long as i spread it out
    //

    //return nft representing lottery ticket.

    constructor(address _manager) {
        //  manager= msg.sender; isntaed of contract.
        manager = _manager;
        console.log("manager of lottery is: ", msg.sender);
    }

    function enter() public payable {
        //they can buy in for various amounts and get a % based on that. as if they bought multiple stacked into 1.

        require(msg.value >= 1 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    function pickWinner() public restricted returns (address) {
        address winner = players[random() % players.length];
        payable(winner).transfer(address(this).balance);

        return winner;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    modifier restricted() {
        // Ensure the participant awarding the ether is the manager
        require(msg.sender == manager);
        _;
    }
}
