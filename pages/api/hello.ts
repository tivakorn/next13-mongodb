import { NextApiResponse } from "next"

export default (req: NextApiResponse, res: NextApiResponse) => {

    res.json({ name: 'tivakorn'})
}