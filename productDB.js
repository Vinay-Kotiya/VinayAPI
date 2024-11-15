require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); //connect with Database

    await Product.deleteMany(); //Deleting all data of database

    await Product.create(ProductJson); //transfer ProductJson data to ./models/product

    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
//function call
start();
