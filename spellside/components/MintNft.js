import React from 'react'
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { contractABI, contractAddress } from "../contracts/mint";
import { useRouter } from 'next/router'
import Web3 from 'web3'
export default function MintNft() {
    const { isAuthenticated, logout, user } = useMoralis();
   
    
    const web3 = new Web3(Web3.givenProvider);
    const onSubmit = async (e) => {
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const response = await contract.methods
          .mint("ipfs://QmdQbaoQpyu4ZVeCAPK4wdZjroGpj39YzicRDi5GxdbBXn/")
          .send({ from: user.get("ethAddress") });
        // Get token id
        const tokenId = response.events.Transfer.returnValues.tokenId;
        // Display alert
        alert(
          `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        );
    };
  
    return (
      <div className="flex w-screen h-screen items-center justify-center">
    
            
          <button
            onClick={onSubmit}
            className="mt-5 w-full p-5 bg-green-700 text-white text-lg rounded-xl animate-pulse"
          >
            Mint now!
          </button>
        
       
      </div>
    );
}
