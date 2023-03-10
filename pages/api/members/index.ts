import { NextApiRequest, NextApiResponse } from "next"

// Models
// import * as ModelsMembers from '../../../models/members'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // const memberList = await ModelsMembers.getMembersList()

    res.status(200).json({ data: 'memberList' })
}