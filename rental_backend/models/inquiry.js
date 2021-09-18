const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({

    name:{
        type : String,
        require : true
    },
    contactNumber : {
        type : long,
        require : true
    },

    email : {
        type : String,
        require : true
    },
//---------------need to apply--------Tik SELECTION-------------------
    note : {
        type : String,
        require: true 
    }
})

const inquiry = mongoose.model("inquiry", inquirySchema ); 

module.exports = inquiry;