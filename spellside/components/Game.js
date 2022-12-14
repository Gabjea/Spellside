import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import DisplayNFTS from "../components/DisplayNFTS"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import { useNFTBalances } from "react-moralis";
import Moralis from "moralis"
import NftCard from "../components/NftCard"
import BattleCard from "../components/BattleCard"
import { useParams } from "react-router-dom";
export default  function Game() {
  const {isAuthenticated, user,logout} = useMoralis()
  const router = useRouter()
  useEffect(() => {
    if(!isAuthenticated){

         router.push("/")
    } else {

 
  
    }
  },[isAuthenticated]);

const [nfts,setNfts] = useState([])

  useEffect(() => {
      
   
    const fetchData = async () => {
        const options = {
            chain: "rinkeby",
            address: user.get("ethAddress"),
          };
          const _nft =  await Moralis.Web3API.account.getNFTs(options)
          const { name } = props.match.params;
          const params = new URLSearchParams(window.location.pathname);
          console.log(params);
          _nft.result.find(element => element === params);
          
           setNfts(_nft)
          console.log(_nft);
    }
  
    
    fetchData()
      
      .catch(console.error);
  },[])
 

  

  return (
   
    <div className="w-screen py-10">
   
    <div className="w-screen h-screen">
        <BattleCard ></BattleCard>
    </div>
    </div>
    )
}
