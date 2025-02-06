const express = require("express");
const router = express.Router();
const Person = require("../models/person")


//todo Person post route
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // console.log("person data: ", data);

    const personData = await Person.create(data);

    console.log("personData: ", personData);

    await personData
      .save()
      .then((dataSave) => {
        console.log("Saved Data:", dataSave);
        res.status(200).json(dataSave);
      })
      .catch((err) => {
        console.error("Error saving data:", err);
        res.status(500).json(err);
      });
  } catch (error) {
    console.log("Error in person post route: ", error);
    res.status(400).json(error);
  }
});

//todo Person get route
router.get("/", async (req, res) => {
  try {
    // const data = req.body;
    // console.log("person data: ", data);

    const personData = await Person.find();

    res.status(200).json(personData);
  } catch (err) {
    res.status(500).json({ err: "Internal server error" });
  }
});

// todo person getting by work type
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    // console.log("worktype: ", worktype);

    if (
      worktype === "manager" ||
      worktype === "waiter" ||
      worktype === "chef" ||
      worktype === "owner"
    ) {
      const data = await Person.find({ work: worktype });
      res.status(200).json(data);
    } else {
      res.status(400).json({ err: "Invalid work type" });
    }
  } catch (err) {
    res.status(500).json({ err: "Internal server error" });
    console.log("Error in menu get route: ", err);
  }
});

//todo person Data update route
router.put("/:id", async(req, res) => {
  try{
    const personId = req.params.id;
    const personData = req.body;

    const updatedPerson = await Person.findByIdAndUpdate(personId, personData, {
      new: true,
      runValidators: true
    })

    if(!updatedPerson){
      console.log("Person not found")
      return res.status(404).json({ err: "Person not found" });
    }
    console.log("updatedPerson: ", updatedPerson);
    res.status(200).json({ messege: "Person data is updated", updatedPerson });

  }catch(err){
    consle.log("Error in person update route: ", err);
    res.status(500).json({ err: "Internal server error" });
  }
})


//todo person Data delete route
router.delete("/:id", async(req, res) => {
  try{
    const id = req.params.id;
    const data = await Person.findByIdAndDelete({_id: id});

    if (!data) {
      console.log("Wrong user id!")
      res.status(404).json({message: "Wrong user id!"})
    }

    console.log("Person data deleted successfully");
    res.status(200).json({message: "Person data deleted successfully"})

  }
  catch(err){
    console.log("Error in person update route: ", err);
    res.status(500).json({ err: "Internal server error" });
  }
})

module.exports = router;
