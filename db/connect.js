const mongoose = require("mongoose");
// const mongoose = require("./lib/");
// const uir = "";
const connectDB = (uir) => {
  mongoose.connect(uir, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log("connected db", uir);
};
module.exports = connectDB;

//new
// var MongoClient = require("mongodb").MongoClient;
// //Create a database named "mydb":
// // var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
