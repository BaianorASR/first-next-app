// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string | unknown;
};

export default function handler(_request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({ name: 'Baianor' });
}
