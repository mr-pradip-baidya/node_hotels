const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");

//todo Menu Post route
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // console.log("menu data: ", data);

    const menuData = await MenuItem.create(data);
    console.log("menu data: ", menuData);

    await menuData
      .save()
      .then((dataSave) => {
        res
          .status(200)
          .json({ messege: "Menu data is saved in database", dataSave });
        console.log("Menu data is saved in database", dataSave);
      })
      .catch((err) => {
        res.status(500).json(err);
        console.error("Error saving data:", err);
      });
  } catch (error) {
    res.status(500).json({ err: "Internal server error" });
  }
});

//todo Menu Get route
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: "Internal server error" });
    console.log("Error in menu get route: ", err);
  }
});

//todo getting parameteriese data from url
router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;

    if (
      taste === "salty" ||
      taste === "sour" ||
      taste === "sweet" ||
      taste === "spicy"
    ) {
      const data = await MenuItem.find({ taste: taste });
      res.status(200).json({ messege: "Getting taste data", data });
    } else {
      res.status(400).json({ err: "Invalid taste type" });
    }
  } catch (error) {
    res.status(500).json({ err: "Internal server error" });
  }
});


module.exports = router;
