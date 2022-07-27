import React from 'react'
import DisplayNFTS from '../components/DisplayNFTS'
import MintNft from '../components/MintNft'
export default function Dashboard(props) {
   const user = props.user
  return (
    <div>
       <MintNft  />
    </div>
  )
}
