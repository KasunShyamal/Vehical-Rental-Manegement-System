const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    DoB : {
        type : String,
        required: true
    },
    NIC : {
        type : String,
        required : true,
        
    },
    Address : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,  
    },
    Phone : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required: true
    },
    ID : {
        type : String,
        required : true,
    },
    JobTitle : {
        type : String,
        required : true,
    },
    Experience : {
        type : Number,
        required : true,
    },
    HireDate : {
        type : String,
        required : true,
    },
    UserName : {
        type : String,
        required :true,
    },
    Password : {
        type : String,
        required :true,
    }


})

const Staff = mongoose.model("Staff",staffSchema );

module.exports = Staff;