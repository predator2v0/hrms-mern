const express = require("express");
const router = express.Router();
const user = require("../models/userSchema");

// register user router
router.post("/register", async (req, res) => {
    try {
        const { name, email, mobile, password, cpassword } = req.body;
        if (!name || !email || !mobile || !password || !cpassword) {
            return res.status(400).json({ msg: "fill all the fields" });
        }
        const userAlreadyRegistered = await user.findOne({ email: email });
        if (userAlreadyRegistered) {
            console.log("user already registered");
            return res.json({ msg: "user already registered" });
        }
        const newUser = new user({ name, email, mobile, password, cpassword });
        const userCreated = await user.create(newUser);
        if (userCreated) {
            res.status(200).json({ msg: "user registered successfully." });
        } else {
            res.status(400).json({ msg: "unable to register user." });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
});

// login router
router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ msg: "fill all the fields" });
    }
    const userExists = await user.findOne({ email: email });
    if (
        userExists &&
        userExists.email === email &&
        userExists.password === password
    ) {
        res.status(200).json({ msg: "user login successful" });
    } else {
        res.status(400).json({ msg: "invalid credentials" });
    }
    } catch(err){
        console.log(err);
        res.status(400).json({msg: 'unable to login. some error occurred'})
    }
});

module.exports = router;
