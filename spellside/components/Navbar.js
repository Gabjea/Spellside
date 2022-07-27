import React from 'react'
import { useMoralis } from "react-moralis"
export default function Navbar(props) {
    const auth = props.auth
    const logout = props.logout
    const user = props.user
    const {isAuthenticated, authenticate} = useMoralis()
    if(auth){
        return (
            <div className="flex w-screen mb-5 py-6">
                <h1 className="text-3xl ml-5">Spellside</h1>
                <div className=" ml-auto mr-5 flex items-center">
                    <h1 className="text-md mr-2 font-medium">{user.get("ethAddress")}</h1>
                    <button onClick={logout} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Log Out</button>
                </div>
            </div>
          )
    }
  return (
    <div className="flex w-screen mb-5 py-6 ">
        <h1 className="text-3xl ml-5">Spellside</h1>
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto mr-5" onClick={() => authenticate({

})}
>Login MetaMask</button>
  
    </div>
  )
}
