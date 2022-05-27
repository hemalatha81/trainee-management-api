const dbConfig = require("../db_config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.course = require("./course.model.js")(sequelize, Sequelize);

db.course.hasMany(db.user,{as: "user"});
db.user.belongsTo(db.course,{
  foreignKey: "mentorid", as:"mentor"

})

// db.tutorials.hasMany(db.comments, { as: "comments" });
// db.comments.belongsTo(db.tutorials, {
//   foreignKey: "tutorialId",
//   as: "tutorial",
// });
db.role.hasMany(db.user,{as: "users"});
db.user.belongsTo(db.role,{
  foreignKey: "roleId", as:"role"

})

module.exports = db;
