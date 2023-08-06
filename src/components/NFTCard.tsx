import React from 'react'
import Image from 'next/image'

import { AirstackERC721TokenType } from '@/lib/airstack/interfaces'

const NFTCard = ({ nft }: { nft: AirstackERC721TokenType }) => {
  const { tokenId } = nft.tokenNfts
  const { medium } = nft.tokenNfts.contentValue.image
  const link = `https://opensea.io/assets/ethereum/0x0b22fe0a2995c5389ac093400e52471dca8bb48a/${tokenId}`
  return (
    <div className="rounded-xl p-6">
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          className="rounded-xl flex-grow"
          src={medium!}
          height="100px"
          width="100px"
          alt="Project logo"
        />
      </a>
    </div>
  )
}

export default NFTCard
