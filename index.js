//require express
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
// const { MongoClient }  = require('mongodb');
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");


//##### middlewares begin

// use bodyparser
app.use(bodyParser.json());
/**
 *  or app.use (express.json()); works too
 */

//cors
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world");
});