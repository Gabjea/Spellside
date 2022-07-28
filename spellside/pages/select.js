import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import DisplayNFTS from "../components/DisplayNFTS"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import { useNFTBalances } from "react-moralis";
import Moralis from "moralis"
import NftCard from "../components/NftCard"
export default  function Select() {
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
          const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
           setNfts(polygonNFTs.result)
          console.log(nfts);
    }
  
    
    fetchData()
      
      .catch(console.error);
  },[])
 

  

  return (
   
    <div className="w-screen py-10">
   
    <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {nfts && nfts.map((nft,index) =>{ 
          const obj = JSON.parse(nft.metadata)
         
           return (obj?.image && <NftCard  nft={obj} /> || <div></div>)
           
        })}
    </div>
    </div>
    )
}
