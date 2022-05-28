const db = require("../model");
const Trainee = db.trainee;
exports.create = (req, res) => {
   

    // Create a Trainee 
    const Traineedata = {
         user_id: req.body.userid,
         user_name: req.body.userName,
         progress:req.body.progress,
         trainingid:req.body.trainingid
    };

    Trainee.create(Traineedata)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            console.log(err.message)
            res.status(200).send({
                status: 'fail',
                message:err.message || "Some error occurred while creating the Trainee."
            });
        });
};

// Retrieve all Trainees from the database.
exports.findAll = (req, res) => {

    Trainee.findAll({ include: ["training"] })
        .then(data => {
            res.send({status:"success",data:data});
        })
        .catch(err => {
            res.status(200).send({ status:"fail",
                message:
                    err.message || "Some error occurred while retrieving Trainee."
            });
        });
};

// Find a single Trainee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Trainee.findByPk(id,{ include: ["training"] })
        .then(data => {
            if (data) {
                res.send({status:"success",data:data});
            } else {
                res.status(404).send({ status:"fail",
                    message: `Cannot find Trainee with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(200).send({ status:"fail",
                message: "Error retrieving Trainee with id=" + id
            });
        });
};

// Update a Trainee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Trainee.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    status:"success",
                    message: "Trainee was updated successfully."
                });
            } else {
                res.send({ status:"fail",
                    message: `Cannot update Trainee with id=${id}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(200).send({ status:"fail",
                message: "Error updating Trainee with id=" + id
            });
        });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Trainee.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ status:"success",
                    message: "Trainee was deleted successfully!"
                });
            } else {
                res.send({ status:"fail",
                    message: `Cannot delete Trainee with id=${id}. Maybe Trainee was not found!`
                });
            }
        })
        .catch(err => {
            res.status(200).send({status:"fail",
                message: "Could not delete Trainee with id=" + id
            });
        });
};

// Delete all Trainee from the database.
exports.deleteAll = (req, res) => {
    Trainee.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ status:"success", message: `${nums} Trainee were deleted successfully!` });
        })
        .catch(err => {
            res.status(200).send({ status:"fail",
                message:
                    err.message || "Some error occurred while removing all Trainee."
            });
        });
};


