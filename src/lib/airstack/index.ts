import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import fetch from 'cross-fetch'

import {
  AirstackERC721TokenType,
  AirstackTokenResponseType,
} from '@/lib/airstack/interfaces'
import { getTokenQuery } from '@/lib/airstack/queries'

export class AirstackHelper {
  apolloClient: ApolloClient<any>

  constructor() {
    this.apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: 'https://api.airstack.xyz/gql',
        fetch,
        headers: { authorization: process.env.AIRSTACK_API_KEY as string },
      }),
      cache: new InMemoryCache(),
    })
  }

  async getTokensForAddress(
    owner: string,
    tokenAddress: string,
  ): Promise<AirstackERC721TokenType[]> {
    try {
      const response = await this.apolloClient.query<AirstackTokenResponseType>(
        {
          query: getTokenQuery,
          variables: { owner, tokenAddress },
        },
      )
      return response.data.erc721.data
    } catch (e) {
      console.error('Error while calling Airstack API', e)
      throw e
    }
  }
}
