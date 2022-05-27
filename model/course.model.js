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

        },
       
      

    }, {
        freezeTableName: true,
        indexes: [{ unique: true, fields: ['name'] }]
       
    });

    return Course;
};