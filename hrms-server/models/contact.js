const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
});

const contactUsModel = mongoose.model("feedback", feedbackSchema);

module.exports = contactUsModel;
