import React,{useState} from "react";
import {useRouter} from 'next/router'

export default function BattleCard(props) {
  console.log(props.nft);

    const [selectedNft,SetSelectedNft] = useState(null)

  const router = useRouter()
  return (
    <div id={props.nft?.tokenId} className="w-2/3 rounded overflow-hidden shadow-lg">
      <img className="w-screen" src={props.nft?.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.nft?.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className=" pt-2 pb-2">
          {props.nft?.attributes?.map((atr) => {
            return (
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {atr?.trait_type} {atr?.value}
              </div>
            );
          })}
        </div>
      </div>
    
    </div>
  );
}
