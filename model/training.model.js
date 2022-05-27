module.exports = (sequelize, Sequelize) => {
    const Trainings = sequelize.define("trainings", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
        }
    });
    return Trainings;
};