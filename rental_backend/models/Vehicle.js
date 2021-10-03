const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    vehicleNumber: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    milages: {
        type: Number,
        required: true,
        min: 0,
    },
    sheetCount: {
        type: Number,
        required: true,
        min: 0,
    },
    condition: {
        type: String,
        required: true,
        min: 3,
    },
    description: {
        type: String,
        required: true,
        min: 6,
    },
    imageURL: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Vehicles", VehicleSchema);