import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import MintNft from "../components/MintNft"
import {useEffect} from "react"
import {useRouter} from "next/router"
export default function Mint() {
  const {isAuthenticated, user,logout} = useMoralis()
  const router = useRouter()
  useEffect(() => {
    if(!isAuthenticated){

         router.push("/")
    }
  },[isAuthenticated]);

  return (
   
    <div className="w-screen">
    <Navbar auth={isAuthenticated} logout={logout} user={user}> </Navbar>
     <MintNft />
     
    </div>
    )
}
