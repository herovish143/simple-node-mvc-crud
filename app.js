const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const product = require("./routes/product.routes")

const app = express();

// connecting to mongodb
let devDbUrl = "mongodb://localhost:27017/crud1"; 

let mongoDB = process.env.DB || devDbUrl;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false,
}));

app.use("/products", product)

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on http://localhost:' + port);
})