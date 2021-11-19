const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    firstName: {
        type: String,
        isRequired: true
    },
    lastName: {
        type: String,
        isRequired: true
    },
    username: {
        type: String,
        isRequired: true
    },
    email: {
        type: String,
        isRequired: true
    },
    password: {
        type: String,
        isRequired: true
    },
});

module.exports = mongoose.model("registeredusers", userModel);