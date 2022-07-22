const express = require("express");
const contactRouter = express.Router();
const contact = require("../models/contact");

contactRouter.post("/contactus", async (req, res) => {
    try {
        let { name, email, message } = req.body;
        name = name.trim();
        email = email.trim();
        message = message.trim();
        if (!name || !email || !message) {
            res.status(400).json({ message: "please fill all the data" });
        }
        const newMessage = new contact({
            name,
            email,
            message,
            time: new Date(),
        });
        const messageSaved = await contact.create(newMessage);
        if (messageSaved) {
            res.status(201).json({
                message: "message saved successfully.",
            });
        } else {
            res.status(500).json({
                message: "unable to save the message. server error",
            });
        }
    } catch (err) {
        console.log("router error", err);
    }
});

module.exports = contactRouter;
