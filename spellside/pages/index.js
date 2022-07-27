import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
export default function Home() {
  const {isAuthenticated, user,logout} = useMoralis()
  if(!isAuthenticated){
    return (
   
      <div className="w-screen flex">
      <Navbar auth={isAuthenticated}> </Navbar>
       </div>
      )
  }
  return (
   
    <div className="w-screen">
    <Navbar auth={isAuthenticated} logout={logout} user={user}> </Navbar>
     
     
    </div>
    )
}
