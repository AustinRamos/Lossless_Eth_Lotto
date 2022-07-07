import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ethers } from 'ethers'
import { BigNumber } from "@ethersproject/bignumber";
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
//import LotteryFactory from './artifacts/contracts/LotteryFactory.sol/LotteryFactory.json'
import {
    Route,
    Routes,
    NavLink,
    HashRouter,
    BrowserRouter,
    Link
  } from "react-router-dom";

const lotteryFactoryAddress = process.env.REACT_APP_LOTTERYFACTORY_CONTRACT

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App
    provider={provider}
    signer = {signer}
    lotteryFactoryAddress={lotteryFactoryAddress}
     />
     </BrowserRouter>

);


