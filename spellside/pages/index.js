import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import {useEffect} from "react"
import {router} from "next/router"
export default function Home() {
  const {isAuthenticated, user,logout} = useMoralis()

  useEffect(() => {
    if (isAuthenticated)
      router.push('/mint')

  },[isAuthenticated])


  if(!isAuthenticated){
    return (
   
      <div className="w-screen flex">
      <Navbar auth={isAuthenticated}> </Navbar>
       </div>
      )
  }
  
}
