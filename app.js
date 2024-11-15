const express = require("express");
const app = express();
require("dotenv").config();

//call connectDB function from ./db/connect
const connectDB = require("./db/connect");

//setting Port to run a server on it
const PORT = process.env.PORT || 5000;

//getting data from ./routes/products
const products_router = require("./routes/products");

//normal route
app.get("/", (req, res) => {
  res.send("HI,I am Live");
});

//routes using routes and controller it is more efficient
app.use("/api/products", products_router);

//Creating a server on PORT=5000
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT},I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
//function call
start();
