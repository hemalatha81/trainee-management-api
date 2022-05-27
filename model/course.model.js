module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
        },
       
        description: {
            type: Sequelize.STRING,

        }
      

    }, {
        freezeTableName: true,
       
    });

    return Course;
};