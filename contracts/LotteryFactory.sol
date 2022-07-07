//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Lottery.sol";
import "hardhat/console.sol";

struct Lotterystr{
     address manager;
    address lottery;
}
contract LotteryFactory {

//search difference between using structs and other stuff!
Lotterystr [] lottery_structs;
Lottery [] public lotteries;

//or just type Lottery instead of address for key?
mapping(address=>address) lottery_managers;

constructor(){

}

//eventually need a argument for time limit

function newLottery( ) public  {
    //mngr=msg.sender, 
Lottery lottery = new Lottery(msg.sender);
lotteries.push(lottery);
lottery_managers[address(lottery)]=msg.sender;
lottery_structs.push(Lotterystr(msg.sender,address(lottery)));

}


function getLotteriesandManagers() public view returns ( Lotterystr [] memory){
return lottery_structs;
}

//i dont think this is neessary 
//    function lottoSetter(uint256 _greeterIndex, string memory _greeting) public {
//      Lottery(address(lotteries[_greeterIndex])).setGreeting(_greeting);
//    }


/// hmm so what would it get even? 
///address?
//    function lottoGetter(uint256 _greeterIndex) public view returns (string memory) {
//     return Lottery(address(lotteries[_greeterIndex]));
//    }

}
