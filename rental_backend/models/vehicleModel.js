const mongoose=require('mongoose');
///const Schema=mongoose.Schema;
const vehicleSchema = new mongoose.Schema({
    vehicle_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    vehicle_name:{
        type: String,
        trim: true,
        required: true
    },
    vehicle_model:{
        type: String,
        trim: true,
        required: true
    },
    sheet_count:{
        type: Number,
        required: true
    },
    amenties:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
      postDate:{type:Date,default:Date.now}
    })
const Vehicle=mongoose.model("Vehicles",vehicleSchema);
module.exports=Vehicle;