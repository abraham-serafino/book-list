import { MongoClient } from 'mongodb';

// Connection URL
// @TODO get from dotenv
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'local';
let db = null;

export default async function Collection(name) {
    if (db === null) {
        await client.connect();
        db = client.db(dbName);
    }

    const collections = await db.listCollections().toArray();
    const collectionExists = collections?.some(
        (collection) => collection.name === name,
    );

    if (!collectionExists) {
        await db.createCollection(name);
    }

    return db.collection(name);
}
