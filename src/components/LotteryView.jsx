import '../App.css';
import { ethers, utils } from 'ethers'
import { useEffect, useState } from 'react'
import Lottery from '../artifacts/contracts/Lottery.sol/Lottery.json'
import PlayerList from './PlayerList'
import { useParams } from "react-router-dom";


function LotteryView({ provider, signer, players, balance }) {




    const { lottoAddress } = useParams()

    //if lottoaddress DNE then return DOES NOT EXIST 

    const enterLottery = () => {
        if (typeof window.ethereum !== 'undefined') {
            const contract = new ethers.Contract(lottoAddress, Lottery.abi, signer)
            const options = { value: utils.parseEther("1") }
            contract.enter(options).then((resp) =>
                console.log(resp))
        }


    }


    return (
        <div>
            <h2> Lotto {lottoAddress.substring(0, 7)}...</h2>
            <button onClick={enterLottery}> enter lottery </button>

            <PlayerList lottoAddress={lottoAddress} provider={provider}> </PlayerList>

        </div>
    );
}

export default LotteryView;
