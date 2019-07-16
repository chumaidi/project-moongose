const User = require("../models/users");

module.exports = {
    getAllUSer:(req,res) => {
        User.find({})
        .then(data => res.send(data))
        .catch(error => res.send({

message:"ups error happened, please call chumaidi to repair",
error

        }))
    }
};