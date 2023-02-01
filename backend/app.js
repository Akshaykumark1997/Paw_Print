const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnect = require("./config/Connections");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbconnect.dbconnect();

app.listen(process.env.PORTNO, () => {
  console.log("server started listening to port");
});
