
// Hello World

const express = require("express");
const app = express();
const dbConnection = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.send("Welcome to my hotel..");
});






const personRoutes = require("./routes/pesonRoutes")
const menuRoutes = require("./routes/menuRoutes")


app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
