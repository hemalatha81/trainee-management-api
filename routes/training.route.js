
const training = require("../controller/training.controller.js");
var router = require("express").Router();


// Create a new Training
router.post("/create", training.create);


module.exports = router;