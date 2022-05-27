module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define("topic", {
        topicname: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        videolink:{
            type: Sequelize.STRING
        },
        documents:{
            type: Sequelize.STRING
        }
      
    }, {
        freezeTableName: true,
       
    });

    return Topic;
};