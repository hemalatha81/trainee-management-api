const { course } = require("../model");
const db = require("../model");
const Training = db.training;

const Trainingcourse = db.training_course;

exports.assigncourse = (req, res) => {
    const trainingData = {
        trainingid: req.body.trainingid,
        name: req.body.name,
        courseid: req.body.courseid

    };

    Trainingcourse.create(trainingData)
        .then(data => {
            res.send({ status: "success", message: "succefully  assigned course to training" });
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                status: 'fail',
                message: err.message || "Some error occurred while assigning the course to the Training."
            });
        });
}


exports.getassigncourse = (req, res) => {


    Trainingcourse.findAll({ include: ["course"] })
        .then(data => {
            //res.send({ status: "success", message:"succefully  assigned course to training" });
            res.send(data);
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                status: 'fail',
                message: err.message || "Some error occurred while assigning the course to the Training."
            });
        });
}


// Create a training 
exports.create = (req, res) => {
    const trainingData = {
        name: req.body.name,

    };

    Training.create(trainingData)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                status: 'fail',
                message: err.message || "Some error occurred while creating the Training."
            });
        });
}

// Retrieve all trainings from the database.
exports.findAll = (req, res) => {

    Training.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.errors[0].message || "Some error occurred while retrieving training."
            });
        });
};

// Find a single training with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Training.findByPk(id, { include: ["course"] })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find training with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving training with id=" + id
            });
        });
};
