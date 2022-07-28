import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import { useEffect } from "react"
import { useRouter} from "next/router"
import Game from "../components/Game"
export default function Play() {
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
     <Game />
     
    </div>
    )
}
