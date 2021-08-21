const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema;

const customerSchema = new schema({
    Name : {
        type : String,
        required : true
    },

    NIC : {
        type : String,
        required : true,
    },

    Email : {
        type : String,
        required : true,
        unique : true,
    },

    Password : {
        type : String,
        required :true,
    },

    Phone : {
        type : Number,
        required : true,
        unique : true,
    },

    Address : {
        type : String,
        required : true,
    },

    isAdmin : {
        type :Boolean,
        required : true,
        default : false,
    },

    isPartner : {
        type :Boolean,
        required : true,
        default : false,
    },

    pic : {
        type : String,
        required : true,
        default : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Fdetail%2F136-1366211_group-of-10-guys-login-user-icon-png.png&imgrefurl=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8i1t4t4t4q8a9_group-of-10-guys-login-user-icon-png%2F&tbnid=gHyezIyavOkvwM&vet=12ahUKEwjW5Nys7sHyAhUBFXIKHfdLDNIQMygCegUIARDLAQ..i&docid=9FF7Wj-v_9JOdM&w=820&h=480&q=user&ved=2ahUKEwjW5Nys7sHyAhUBFXIKHfdLDNIQMygCegUIARDLAQ",
    }
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;