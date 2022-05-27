module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        }
       


    }, {
        freezeTableName: true,
        indexes: [{ unique: true, fields: ['name','email'] }]
    });

    return User;
};