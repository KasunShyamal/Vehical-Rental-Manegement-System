const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    age:{
        type : Number,
        required: true
    },
    gender:{
        type : String,
        required: true
    }

})

const Student = mongoose.model("Student",staffSchema);

module.exports = Student;