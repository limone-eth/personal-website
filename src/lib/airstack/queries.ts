import { gql } from '@apollo/client'

export const getTokenQuery = gql`
  query tokens($owner: Identity!, $tokenAddress: Address!) {
    erc721: TokenBalances(
      input: {
        filter: {
          owner: { _in: [$owner] }
          tokenType: { _in: [ERC721] }
          tokenAddress: { _eq: $tokenAddress }
        }
        blockchain: ethereum
      }
    ) {
      data: TokenBalance {
        amount
        chainId
        id
        tokenNfts {
          tokenId
          metaData {
            name
          }
          contentValue {
            image {
              medium
              large
              original
            }
          }
        }
      }
    }
  }
`
