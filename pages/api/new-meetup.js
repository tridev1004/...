import { MongoClient } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://tridev_1004:tribhuvan1@cluster0.j0g0y.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
       const result=await meetupsCollection.insertOne(data);
       console.log(result);
       client.close();
       res.status(201).json({message:'meetup inserted'})
  }
}

export default Handler;
