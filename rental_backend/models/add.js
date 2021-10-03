const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema;

const addSchema = new schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    Name : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    ConNumber : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    
});

const Add = mongoose.model('Add', addSchema);

module.exports = Add;
