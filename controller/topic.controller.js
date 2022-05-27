const db = require("../model");
const Topics = db.topic;
exports.create = (req, res) => {
   

    // Create a topic
    const topicdata = {
        topicname: req.body.topicname,
        description: req.body.description,
        videolink: req.body.videolink ?  req.body.videolink : "https://www.youtube.com/watch?v=YkMVNdBZbc0",
        documents:"http://www.africau.edu/images/default/sample.pdf",
        courseid:1
    };

    Topics.create(topicdata)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            res.status(500).send({
                status: 'fail',
                message:
                    err.message || "Some error occurred while creating the topics."
            });
        });
};

// Retrieve all topic from the database.
exports.findAll = (req, res) => {

    Topics.findAll({ include: ["course"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving topics."
            });
        });
};

// Find a single topic with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Topics.findByPk(id,{ include: ["course"] })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find course with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving topic with id=" + id
            });
        });
};

// Update a topic by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Topics.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "topic was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update topic with id=${id}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating course with id=" + id
            });
        });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Topics.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "topic was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete course with id=${id}. Maybe course was not found!`
                });
            }
        })

        .catch(err => {
            res.status(500).send({
                message: "Could not delete course with id=" + id
            });
        });
};

// Delete all topics from the database.
exports.deleteAll = (req, res) => {
    Topics.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} topic were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all topic."
            });
        });
};


