import { MongoClient } from 'mongodb';
import 'dotenv/config'

let db
export async function connect() {
    if (db) return db
    const client = new MongoClient(process.env.URI);
    await client.connect();
    db = client.db("SecureNotes")
    console.log("connected to MongoDB!", db.databaseName);
    return db
}