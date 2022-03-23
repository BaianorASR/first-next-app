import { NextApiRequest, NextApiResponse } from 'next';

import { sampleUserData, User } from '../../utils/sample-data';

type Data =
  | {
      statusCode: number;
      message: Error;
    }
  | Array<User>;

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }
    res.status(200).json(sampleUserData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
