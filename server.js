const express = require("express");
const users = require("./controller/user.controller.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

const db = require("./model");
 db.sequelize.sync();

 app.use("/api/role",require("./routes/role.route"));
 app.use("/api/users",require("./routes/user.route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
