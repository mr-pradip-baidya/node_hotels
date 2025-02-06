const mongoose = require("mongoose");

//Define the mongodb connection url
const mongoUrl = "mongodb://localhost:27017/hotels";


 module.exports = mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Connection done.")
})
.catch((err)=> {
    console.log(err)
})


// //Export the connection object
// const dbConnection = mongoose.Connection; 
// module.exports = dbConnection