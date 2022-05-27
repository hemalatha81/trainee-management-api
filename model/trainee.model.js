module.exports = (sequelize, Sequelize) => {
    const Trainee = sequelize.define("trainee", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        trainee_id: {
            type: Sequelize.INTEGER
        },
        trainee_name: {
            type: Sequelize.STRING,

        },
        course_id: {
            type: Sequelize.INTEGER

        },
        progress: {
            type: Sequelize.STRING,
        },

        mentor_name: {
            type: Sequelize.STRING,

        },
        mentorid: {
            type: Sequelize.INTEGER,

        }



    }, {
        freezeTableName: true,
       
    });

    return Trainee;
};