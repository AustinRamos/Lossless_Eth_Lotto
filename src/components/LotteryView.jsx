import '../App.css';
import {ethers, utils} from 'ethers'
import {useEffect, useState} from 'react'
import Lottery from '../artifacts/contracts/Lottery.sol/Lottery.json'
import PlayerList from './PlayerList'

function LotteryView({lotteryAddress, provider, signer, players, balance}) {
 

console.log("lotteryAddress" , lotteryAddress)

console.log("LOTTERY VIEW")

const enterLottery = () =>{
  if (typeof window.ethereum !== 'undefined') {
    const contract = new ethers.Contract(lotteryAddress, Lottery.abi, signer)
const options = {value: utils.parseEther("1")}
    contract.enter(options).then((resp)=>
    console.log(resp))
    }

  
}


  return (
    <div>
    <h1> TEST</h1>
    <button onClick={enterLottery}> enter lottery </button>

    <PlayerList players = {players}> </PlayerList>
    
    </div>
  );
}

export default LotteryView;
