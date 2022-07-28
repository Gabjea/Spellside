import React from 'react'
import {useEffect,useState} from 'react'
import Moralis from 'moralis'
import Match from "./Match"

export default function Game() {

    
    const [isPlayerInGame,setIsPlayerInGame] = useState(false);
    const [selectedNft, setSelectedNft] = useState(null)
    const [matchStarted, setMatchStarted] = useState(false)
  

    
   
    const startMatchmaking = async () => {
        setIsPlayerInGame(true)
      
    }

  return (
    <div className="w-screen h-screen  justify-center flex">
        {!isPlayerInGame && (<button onClick={startMatchmaking}>Start Matchmaking</button>)}
        {matchStarted && <Match  />}
    </div>
  )
}
