
const Topic = require("../controller/Topic.controller.js");
var router = require("express").Router();


// Create a new Topic
router.post("/create", Topic.create);

// Retrieve all Topic
 router.get("/", Topic.findAll);

// Retrieve a single Topic with id
router.get("/:id", Topic.findOne);

// Update a  Topic with id
router.put("/update/:id", Topic.update);

// Delete a Topic with id
 router.delete("/delete/:id", Topic.delete);


 // Delete a Cours All
 router.delete("/deleteall", Topic.deleteAll);


module.exports=router
