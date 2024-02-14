const { MongoClient, ObjectId } = require("mongodb");
// const dbUrl = "mongodb://127.0.0.1:27017/supplements";
const dotenv = require("dotenv");
dotenv.config();
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.kqwupps.mongodb.net/`;

const client = new MongoClient(dbUrl);

async function connection() {
  db = client.db("supplements");
  return db;
}
async function getProducts() {
  db = await connection();
  var results = db.collection("products").find({});
  res = await results.toArray();
  return res;
}
async function addProduct(product) {
  db = await connection();
  var status = await db.collection("products").insertOne(product);
  console.log("states " + status);
}
module.exports = { getProducts, addProduct };
