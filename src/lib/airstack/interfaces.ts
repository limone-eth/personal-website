export interface AirstackTokenResponseType {
  erc721: {
    data: AirstackERC721TokenType[]
  }
}

export interface AirstackERC721TokenType {
  amount: string
  chainId: string
  id: string
  tokenNfts: {
    tokenId: string
    metaData: {
      name: string
    }
    contentValue: {
      image: {
        medium: string
        large: string
        original: string
      }
    }
  }
}
