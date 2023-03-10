import { ObjectId } from 'mongodb'

import { useMongoDb } from '../libs/mongodb'
import * as COLLECTIONS from '../libs/mongodb/collections'

interface Member {
    _id: ObjectId,
    name: string
}

export const getMembersList = async (): Promise<Member[]> => {

    const db = await useMongoDb('sample_training')

    const member = db.collection(COLLECTIONS.PANTIP_POINT_MEMBERS).find<Member>({}).limit(10).toArray()

    return member
}

export const getMembers = async (name: string): Promise<Member | null> => {

    const db = await useMongoDb('sample_training')

    const fitter = {
        name: name
    }

    const member = db.collection(COLLECTIONS.PANTIP_POINT_MEMBERS).findOne<Member>(fitter)

    return member
}
