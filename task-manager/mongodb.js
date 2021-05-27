// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const OjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "task-manager";

const id = new ObjectID();
// console.log(id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.getTimestamp().length);

MongoClient.connect(
  connectionURL,
  {
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(database);
    db.collection("user")
      .updateOne(
        {
          _id: new ObjectID("608b93b437f1d5967ca8f980"),
        },
        {
          $inc: {
            age: 1,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
