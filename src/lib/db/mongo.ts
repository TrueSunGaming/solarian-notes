import { type Db, MongoClient } from "mongodb";
import { MONGO_KEY } from "$env/static/private";

const uri = `mongodb+srv://truesungaming:${MONGO_KEY}@cluster0.czuwe.mongodb.net/?retryWrites=true&w=majority`

export const client: MongoClient = new MongoClient(uri);

export function startMongo(): Promise<MongoClient> {
    console.log("Starting MongoDB...");
    return client.connect();
}

export const db: Db = client.db("solarian-notes");