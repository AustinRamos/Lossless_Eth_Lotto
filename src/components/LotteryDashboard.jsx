//import './App.css';
import { ethers, utils } from 'ethers'
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import LotteryFactory from '../artifacts/contracts/LotteryFactory.sol/LotteryFactory.json'
import Lottery from '../artifacts/contracts/Lottery.sol/Lottery.json'

function LotteryDashboard({ lotteryFactoryAddress, provider, signer }) {

    const [lotteries, setLotteries] = useState([])
    const [managers, setManagers] = useState([])

    useEffect(() => {
        const factoryContract = new ethers.Contract(lotteryFactoryAddress, LotteryFactory.abi, provider)
        factoryContract.getLotteriesandManagers().then(resp => {
            console.log("Reading getLotteriesandManagers: ", resp)
            setLotteries(resp)
        })


    }, [])


    const createLotto = () => {
        console.log("signer:", signer)
        console.log("CreateLotto")
        const factoryContract = new ethers.Contract(lotteryFactoryAddress, LotteryFactory.abi, signer)
        factoryContract.newLottery().then(resp => {
            console.log("LOTTO CREATED : ", resp)
        })

    }
    

    return (
        <div>
            Current lotteries:
            
            <ul>
                {lotteries.map(lottery => {
                    console.log("map ", lottery.lottery)
                    const link = "/lottery/".concat(lottery.lottery)
                    return (
                        <li key={lottery.lottery} >{(lottery.lottery).substring(0, 8)}...
                 mngr: {(lottery.manager).substring(0, 8)}...
                <Link to={link}> <button> View</button> </Link>
                        </li>
                    );
                }
                )}
            </ul>
            <button onClick={createLotto}>Create new Lottery</button>
        </div>
    )
}

export default LotteryDashboard;