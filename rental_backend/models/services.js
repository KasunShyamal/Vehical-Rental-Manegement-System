const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({

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
  


})

const Service = mongoose.model("Service",ServiceSchema );

module.exports = Service;