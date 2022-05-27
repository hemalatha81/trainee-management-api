
const trainee = require("../controller/trainee.controller.js");
var router = require("express").Router();


// Create a new trainee
router.post("/create", trainee.create);

// Retrieve all trainee
 router.get("/", trainee.findAll);

// Retrieve a single trainee with id
router.get("/:id", trainee.findOne);

// Update a  trainee with id
router.put("/update/:id", trainee.update);

// Delete a trainee with id
 router.delete("/delete/:id", trainee.delete);


 // Delete a Cours All
 router.delete("/deleteall", trainee.deleteAll);


module.exports=router
