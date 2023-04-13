const { MongoClient, ServerApiVersion } = require("mongodb");

import connect from "../../utils/mongodb";

const password = encodeURIComponent("Vic60627@");

const uri = `mongodb+srv://vic0517:${password}@cluster0.xqxfy2j.mongodb.net/?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address } = data;

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "add meetup successed!" });
  }
}
