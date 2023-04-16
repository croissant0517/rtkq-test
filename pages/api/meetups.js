const { MongoClient, ServerApiVersion } = require("mongodb");

import connect from "../../utils/mongodb";

const password = encodeURIComponent("Vic60627@");

const uri = `mongodb+srv://vic0517:${password}@cluster0.xqxfy2j.mongodb.net/?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  const client = await MongoClient.connect(uri);

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  res.send(meetups);

  client.close();
}
