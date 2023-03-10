// Dependencies
import { Db, MongoClient, MongoClientOptions, ReadPreference } from 'mongodb'

const connect = async (): Promise<MongoClient> => {

  let client
  let clientPromise: Promise<MongoClient>

  const MONGODB_URI = `mongodb+srv://${'omega.fkb19cw.mongodb.net'}`

  const MONGODB_OPTION: MongoClientOptions = {
    auth: { username: 'pnnene', password: 'cG5uZW5l' },
    readPreference: ReadPreference.SECONDARY,
    w: 'majority',
  }

  if (process.env.NODE_ENV === 'development') {

    if (!global._mongoClientPromise) {

      client = new MongoClient(MONGODB_URI, MONGODB_OPTION)

      global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise

  } else {

    client = new MongoClient(MONGODB_URI, MONGODB_OPTION)

    clientPromise = client.connect()
  }

  return clientPromise
}

export const useMongoDb = async (dbName: string): Promise<Db> => {

  const client = await connect()

  return client.db(dbName)
}

export const useMongoClient = async (): Promise<MongoClient> => connect()