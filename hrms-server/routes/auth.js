const express = require("express");
const authRouter = express.Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
// register user router
authRouter.post("/register", async (req, res) => {
    try {
        const { name, email, mobile, password, cpassword } = req.body;
        if (!name || !email || !mobile || !password || !cpassword) {
            return res.status(400).json({ msg: "fill all the fields" });
        }
        const userAlreadyRegistered = await user.findOne({ email: email });
        if (userAlreadyRegistered) {
            return res.json({ msg: "user already registered" });
        } else if (password !== cpassword) {
            return res
                .status(400)
                .json({ msg: "password does not match confirm password" });
        } else {
            const newUser = new user({
                name,
                email,
                mobile,
                password,
                cpassword,
            });
            newUser.password = await bcrypt.hash(newUser.password, 12);
            newUser.cpassword = await bcrypt.hash(newUser.cpassword, 12);
            const userCreated = await user.create(newUser);
            if (userCreated) {
                res.status(200).json({ msg: "user registered successfully." });
            } else {
                res.status(400).json({ msg: "unable to register user." });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
});

// login router
authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ msg: "fill all the fields" });
        }
        const userExists = await user.findOne({ email: email });
        const matchPass = await bcrypt.compare(password, userExists.password);
        if (userExists && userExists.email === email && matchPass) {
            res.status(200).json({ msg: "user login successful" });
        } else {
            res.status(400).json({ msg: "invalid credentials" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "unable to login. some error occurred" });
    }
});

module.exports = authRouter;
