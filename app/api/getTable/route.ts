import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const uri = 'mongodb+srv://madhabcoder:nm010798@cluster0.zwk2d36.mongodb.net'; // Update with your MongoDB URI
  const dbName = 'table';
  const collectionName = 'tables';

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const data = await collection.find({}).toArray();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}