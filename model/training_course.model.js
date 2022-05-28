module.exports = (sequelize, Sequelize) => {
    const Trainingcourse = sequelize.define("trainingscourse", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        trainingid: {
            type: Sequelize.INTEGER,
            
        },
        name: {
            type: Sequelize.STRING,
            
        },

       
    });
    return Trainingcourse;
};