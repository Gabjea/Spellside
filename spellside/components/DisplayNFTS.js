import React from 'react'
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
export default async function DisplayNFTS() {
    const { user } = useMoralis();
    const options = {chain: "rinkeby" , address: user.get("ethAddress")}
    const nfts = await Moralis.User.getNFTs(options);
    return (
        <div>
          {nfts.map((nft, index) => {
            return (
              <div key={index}>
                <h2>name: {nft.name}</h2>
                
    
                <hr />
              </div>
            );
          })}
    
        </div>
      );
    

}
