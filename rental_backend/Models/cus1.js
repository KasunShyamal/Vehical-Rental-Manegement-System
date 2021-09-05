const mongoose = require("mongoose");

const schema = mongoose.Schema;

const customerSchema = new schema({
    
    User_id : {
        trpe : String
    },
    
    Address : {
        type : String,
        required : true
    }
});

const Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer;