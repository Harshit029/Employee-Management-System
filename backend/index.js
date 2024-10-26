const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
require("./Models/db");
const EmployeeRouter = require("./Routes/EmployeeRoutes");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("employee management server is running");
});
app.use("/api/employees", EmployeeRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
