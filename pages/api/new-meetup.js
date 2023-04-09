const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://vic0517:Vic60627@@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address } = data;

    const client = await MongoClient.connect(url);
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "add meetup successed!" });
  }
}
