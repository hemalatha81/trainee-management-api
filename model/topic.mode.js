module.exports = (sequelize, Sequelize) => {
    const Topics = sequelize.define("topics", {
        topicname: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        referencelink: {
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

    return Topics;
};