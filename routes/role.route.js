
const role = require("../controller/role.controller.js");
var router = require("express").Router();

// Create a new User Acoount 
router.post("/create", role.create);

// Retrieve all roles
 router.get("/", role.findAll);

// Retrieve a single role with id
router.get("/:id", role.findOne);

// Update a  role with id
router.put("/update/:id", role.update);

// Delete a role with id
 router.delete("/delete/:id", role.delete);



module.exports=router
