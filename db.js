const mongoose = require("mongoose");

//Define the mongodb connection url
// const mongoUrl = "mongodb://localhost:27017/hotels";
const mongoUrl = process.env.DB_URL;

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