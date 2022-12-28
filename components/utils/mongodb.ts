import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
/* mongodb+srv://molitio-data:<password>@atlascluster.bka2iin.mongodb.net/?retryWrites=true&w=majority */

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  // Connection was successful
  console.log("Connected to Atlas cluster");
});
