import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import {useRouter} from "next/router"
import { useEffect} from "react"
export default function Vote() {
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
     <h1>Vote</h1>
     
    </div>
    )
}
