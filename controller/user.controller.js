const db = require("../model");
const User = db.user;

exports.login = (req, res) => {

    User.findOne({
        where: {
            name: req.body.name,
            password: req.body.password
        }
    }).then((user) => {

        if (!user) {
            res.status(500).send({ status: "failed", message: "login failed" })

        }
        else{
            res.send({status:"success",message:"successfull login"})
        }

    }).catch(err => {
        res.status(500).send({
            status: 'fail',
            message:
                err.message || "Some error occurred while login in to  the account."
        });
    });


};


exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User Accoount 
    const userdata = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roleid: 1
    };

    User.create(userdata)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            res.status(500).send({
                status: 'fail',
                message:
                    err.message || "Some error occurred while creating the account."
            });
        });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {

    User.findAll({ include: ["role"] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id, { include: ["role"] })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find user with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + id
            });
        });
};

// Update a user by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "user was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating user with id=" + id
            });
        });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} User were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all User."
            });
        });
};

exports.resetPassword = (req, res) =>{
    const id = req.body.email;

    User.update(req.body, {
        where: { email: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Password has been updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update user with the new password. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Something went wrong for the user" + id
            });
        });
}


