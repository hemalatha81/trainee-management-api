module.exports = (sequelize, Sequelize) => {
    const Trainee = sequelize.define("trainee", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        user_name: {
            type: Sequelize.STRING,

        },
        progress: {
            type: Sequelize.STRING,
        }

    }, {
        freezeTableName: true,

    });

    return Trainee;
};