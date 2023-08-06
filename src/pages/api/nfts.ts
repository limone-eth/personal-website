import type { NextApiRequest, NextApiResponse } from 'next'

import { AirstackHelper } from '@/lib/airstack'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const tokens = await new AirstackHelper().getTokensForAddress(
      'limone.eth',
      '0x0b22fe0a2995c5389ac093400e52471dca8bb48a',
    )

    return res.status(200).json(tokens)
  } catch (err) {
    console.log(err)
    return res.status(500).json('Something went wrong')
  }
}
