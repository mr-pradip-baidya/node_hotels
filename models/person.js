
const mongoose = require("mongoose");

// Define the schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum: ["manager", "waiter", "chef", "owner"],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});


const Person = mongoose.model("Persons", personSchema);
module.exports = Person;