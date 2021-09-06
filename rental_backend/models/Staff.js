const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    DoB : {
        type : date,
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
        unique : true,
    },
    Phone : {
        type : Number,
        required : true,
        unique : true,
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
        type : Date,
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

const Student = mongoose.model("Staff",staffSchema );

module.exports = Staff;