import { useMoralis } from "react-moralis"
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"
import {useRouter} from "next/router"
import { useEffect, useState} from "react"
import Moralis from "moralis"
import CharityCard from "../components/CharityCard"
export default function Vote() {
  const {isAuthenticated, user,logout} = useMoralis()
  const router = useRouter()
  useEffect(() => {
    if(!isAuthenticated){

         router.push("/")
    }
  },[isAuthenticated]);

 const [charity,setCharity] = useState(null)

useEffect(() => {
      
    // declare the data fetching function
    const fetchData = async () => {
        const Charity = Moralis.Object.extend("Charity");
        const query = new Moralis.Query(Charity);
        
        const results = await query.find();
       
    // Do something with the returned Moralis.Object values
    var arr = []
    for (let i = 0; i < results.length; i++) {
    const object = results[i];
    arr.push({name:object.get("Name"),description:object.get("Description"),ethAddress: object.get("ethAddress"),votes: object.get("votes"),img: object.get("img")})
    
    }
        setCharity(arr)
        console.log(arr)
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  },[])

  return (
   
    <div className="w-screen">
    <Navbar auth={isAuthenticated} logout={logout} user={user}> </Navbar>
     {
        <div className="w-screen grid flex items-center justify-center">
       { charity?.map((char,index) => {
            return <CharityCard char={char} id ={index}></CharityCard>
        })}
        </div>
     }
     
    </div>
    )
}
