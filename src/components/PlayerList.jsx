import {ethers, utils} from 'ethers'
import {useEffect, useState} from 'react'
import Lottery from '../artifacts/contracts/Lottery.sol/Lottery.json'



function PlayerList({lottoAddress, provider, signer}) {
    const [players, setPlayers] = useState(0);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
  
      if (typeof window.ethereum !== 'undefined') {
        const contract = new ethers.Contract(lottoAddress, Lottery.abi, provider)
  console.log("provider ", provider)
        contract.getPlayers().then(resp => {
  console.log("get players: ", resp)
          setPlayers(resp)
        }
        ).catch(e => 
            {console.log(e)
                console.log("ERROR GET PLAYERS ")
            })

        provider.getBalance(lottoAddress).then(resp => {
          const bal = ethers.utils.formatEther(resp)
          setBalance(bal)
        })
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

            <h3>Eth in lottery: {balance}</h3>
        </div>
    )
}

export default PlayerList;