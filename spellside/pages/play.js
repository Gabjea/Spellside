import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import { useEffect } from "react"
import { useRouter} from "next/router"
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
     <h1>Play</h1>
     
    </div>
    )
}
