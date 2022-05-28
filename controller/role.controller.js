const db = require("../model");
const Role = db.role;

exports.create = (req, res) => {

  roledata = {
    role: req.body.role
  }
  Role.create(roledata)
    .then(data => {
      res.send({ status: "success", data: data });
    })
    .catch(err => {
      res.status(200).send({
        status: 'fail',
        message:
          err.message || "Some error occurred while creating the role."
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {

  Role.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(200).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


// Find a single role with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Role.findByPk(id)
    .then(data => {
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.status(404).send({
          status: "fail",
          message: `Cannot find role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(200).send({
        message: "Error retrieving role with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Role.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          status: "success",
          message: "role was updated successfully."
        });
      } else {
        res.send({
          status: "fail",
          message: `Cannot update role with id=${id}. Maybe role was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(200).send({
        status: "fail",
        message: "Error updating role with id=" + id
      });
    });
};


// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Role.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          status: "success",
          message: "Role was deleted successfully!"
        });
      } else {
        res.send({
          status: "fail",
          message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
        });
      }
    })
    .catch(err => {
      res.status(200).send({
        status: "fail",
        message: "Could not delete Role with id=" + id
      });
    });
};