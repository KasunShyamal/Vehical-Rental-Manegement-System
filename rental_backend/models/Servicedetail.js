const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = new Schema({

    vehicleNo : {
        type : String,
        required: true
    },
    dos : {
        type : Date,
        required: true
    },
    Mileageatservice : {
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

const Servicedetails = mongoose.model("Servicedetail",serviceSchema );

module.exports = Servicedetails;