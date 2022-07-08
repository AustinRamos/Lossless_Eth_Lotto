import './App.css';
import { ethers, utils } from 'ethers'
import { useEffect, useState } from 'react'
import Lottery from './artifacts/contracts/Lottery.sol/Lottery.json'
//import LotteryFactory from './artifacts/contracts/LotteryFactory.sol/LotteryFactory.json'
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

import LotteryView from './components/LotteryView'
import LotteryDashboard from './components/LotteryDashboard'


function App({ lotteryFactoryAddress, provider, signer }) {



  return (
    <div>
      <LotteryDashboard
        lotteryFactoryAddress={lotteryFactoryAddress}
        provider={provider}
        signer={signer}>
      </LotteryDashboard>


      <Routes>
        {/* do I get players in app to send to the component or just do it over there? */}
        <Route path="lottery/:lottoAddress" element={<LotteryView provider={provider} signer={signer} ></LotteryView>}></Route>
      </Routes>
    </div>
  );
}

export default App;
