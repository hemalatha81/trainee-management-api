module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role: {
            type: Sequelize.STRING,
            unique: true,
        },
        roleid:{
            type: Sequelize.INTEGER,
            
        }

    }, {
        freezeTableName: true,
        indexes: [{ unique: true, fields: ['role'] }]
    });

    return Role;
};