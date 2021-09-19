const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const customerRoutes = require('./routes/customerRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddeware");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8092;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL ;

mongoose.connect(URL, {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

app.use('/api/customer', customerRoutes);

app.use(notFound)
app.use(errorHandler)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connection success!");
})

app.listen(PORT, () =>{
    console.log(`Server is up and running in port no : ${PORT}`);
})
