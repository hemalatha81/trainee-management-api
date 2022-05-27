const db = require("../model");
const Training = db.training;
exports.create = (req, res) => {
    // Create a training 
    const trainingData = {
        name: req.body.name,
        description: req.body.description
    };

    Training.create(trainingData)
        .then(data => {
            res.send({ status: "success", data: data });
        })
        .catch(err => {
            console.log(err.errors[0].message)
            res.status(500).send({
                status: 'fail',
                message: err.errors[0].message || "Some error occurred while creating the Training."
            });
        });
}
