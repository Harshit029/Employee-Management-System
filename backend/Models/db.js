const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MONGO DB CONNECTED SUCESSFULLY");
  })
  .catch((err) => {
    console.log("Error in MONGO DB CONNECTION ", err);
  });
