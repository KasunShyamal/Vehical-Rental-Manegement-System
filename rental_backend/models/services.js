const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const servicesSchema = new Schema({

    vehicleNo : {
        type : String,
        required: true
    },
    dos : {
        type : String,
        required: true
    },
    Milageatservice : {
        type : Number,
        required: true
    },
    PerformedBy: {
        type : String,
        required : true,
        
    },
    Note : {
        type : String,
        required : true,
    },
  


});

const services = mongoose.model("services",servicesSchema );

module.exports = services;