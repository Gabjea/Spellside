import { useMoralis } from "react-moralis"
export default function Home() {
  const {isAuthenticated, authenticate} = useMoralis()
  if(!isAuthenticated){
    return (
   
      <div>
       <h1 className="text-3xl font-bold underline">
      Main Page
    </h1>
    <button className="btn btn-primary" onClick={() => authenticate({

    })}
    >Login MetaMask</button>
      </div>
      )
  }
  return (
   
    <div>
     <h1>Logged in</h1>
    </div>
    )
}
