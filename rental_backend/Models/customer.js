const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema;

const userSchema = new schema({
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

    UserType : {
        type : String,
        //required : true
    },

    BussinessType : {
        type : String
    },
    

    pic : {
        type : String,
        required : false,
        default : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Fdetail%2F136-1366211_group-of-10-guys-login-user-icon-png.png&imgrefurl=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8i1t4t4t4q8a9_group-of-10-guys-login-user-icon-png%2F&tbnid=gHyezIyavOkvwM&vet=12ahUKEwjW5Nys7sHyAhUBFXIKHfdLDNIQMygCegUIARDLAQ..i&docid=9FF7Wj-v_9JOdM&w=820&h=480&q=user&ved=2ahUKEwjW5Nys7sHyAhUBFXIKHfdLDNIQMygCegUIARDLAQ",
    }
});

userSchema.pre("save", async function(next){
    if(!this.isModified("Password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.Password);
};

const User = mongoose.model('User',userSchema);

module.exports = User;