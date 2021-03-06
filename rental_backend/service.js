const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const customerRoutes = require('./routes/customerRoutes');
const addRoutes = require('./routes/addRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddeware");
const app = express();
require("dotenv").config();
const path = require("path");
const fileupload = require("express-fileupload");


const PORT = process.env.PORT ;

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
app.use('/api/add', addRoutes);

app.use(notFound)
app.use(errorHandler)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connection success!");
})
// Middleware
app.use(express.json());
app.use(fileupload());
app.use(cors());

// Import routes
const VehicleManagement = require("./routes/vehicle_management");
const Category_Management = require("./routes/category_management");
// Use routes
app.use("/api/vehicles", VehicleManagement);

app.use("/api/categories", Category_Management);
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>{
    console.log(`Server is up and running in port no : `+PORT);
});
