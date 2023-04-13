import { MongoClient } from "mongodb";

const password = encodeURIComponent("Vic60627@");

const MONGODB_URI = `mongodb+srv://vic0517:${password}@cluster0.xqxfy2j.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

export { client, connect };
