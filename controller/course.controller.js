const db = require("../model");
const Course = db.course;




exports.create = (req, res) => {
   

    // Create a Course 
    const coursedata = {
        name: req.body.name,
        description: req.body.description,
    };

    Course.create(coursedata)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            res.status(500).send({
                status: 'fail',
                message:
                    err.message || "Some error occurred while creating the course."
            });
        });
};

// Retrieve all courses from the database.
exports.findAll = (req, res) => {

    Course.findAll({ include: ["role"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving course."
            });
        });
};

// Find a single course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Course.findByPk(id, { include: ["user"] })
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
                message: "Error retrieving course with id=" + id
            });
        });
};

// Update a course by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Course.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "course was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update course with id=${id}. Maybe user was not found or req.body is empty!`
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

    Course.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "course was deleted successfully!"
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

// Delete all course from the database.
exports.deleteAll = (req, res) => {
    Course.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} course were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all course."
            });
        });
};


