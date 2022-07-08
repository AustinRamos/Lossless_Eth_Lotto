import {ethers, utils} from 'ethers'
import {useEffect, useState} from 'react'
import Lottery from '../artifacts/contracts/Lottery.sol/Lottery.json'



function PlayerList({lottery_address, provider, signer}) {
    const [players, setPlayers] = useState(0);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
  
      if (typeof window.ethereum !== 'undefined') {
        const contract = new ethers.Contract(lottery_address, Lottery.abi, provider)
  
        contract.getPlayers().then(resp => {
  
          setPlayers(resp)
        }
        ).catch(e => console.log(e))

        // provider.getBalance(lottery_address).then(resp => {
        //   const bal = ethers.utils.formatEther(resp)
        //   setBalance(bal)
        // })
      }
  
    }, [])
if(players==undefined || players==0){
            return;
}

    return(
        
        <div>
        <h1>Players: </h1>
        
        <ul>
        {players.map(player=>
            <li key = {player}>player {player}</li>
        )}
        </ul>

        </div>
    )
}

export default PlayerList;