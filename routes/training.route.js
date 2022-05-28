
const training = require("../controller/training.controller.js");
var router = require("express").Router();


// assign course to Training
router.post("/assign", training.assigncourse);
router.get("/get_trainingcourse", training.getassigncourse);

// Create a new Training
router.post("/create", training.create);

// Retrieve all Training
router.get("/", training.findAll);

// Retrieve a single Training with id
router.get("/:id", training.findOne);


module.exports = router;