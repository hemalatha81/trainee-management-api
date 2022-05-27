
const training = require("../controller/training.controller.js");
var router = require("express").Router();


// Create a new Training
router.post("/create", training.create);

// Retrieve all Training
router.get("/", training.findAll);

// Retrieve a single Training with id
router.get("/:id", training.findOne);


module.exports = router;