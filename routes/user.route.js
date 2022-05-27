
    const users = require("../controller/user.controller.js");
  
    var router = require("express").Router();

    router.post("/login", users.login);
  
    // Create a new User Acoount 
    router.post("/create", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a  user with id
    router.put("/update/:id", users.update);
  
    // Delete a user with id
    router.delete("/delete/:id", users.delete);
  
    // Delete all users
    router.delete("/deleteall", users.deleteAll);

    //Reset or update password
    router.post("/resetPassword", users.resetPassword)
  
  module.exports=router
  


  