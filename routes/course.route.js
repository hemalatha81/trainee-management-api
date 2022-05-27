
const course = require("../controller/course.controller.js");
var router = require("express").Router();


// Create a new Course
router.post("/create", course.create);

// Retrieve all Course
 router.get("/", course.findAll);

// Retrieve a single Course with id
router.get("/:id", course.findOne);

// Update a  Course with id
router.put("/update/:id", course.update);

// Delete a Course with id
 router.delete("/delete/:id", course.delete);


 // Delete a Cours All
 router.delete("/deleteall", course.deleteAll);


module.exports=router
