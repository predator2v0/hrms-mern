const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
const contactRouter = require("./routes/contactus");

const app = express(); // express app.
const db = require("./config/dbConn"); // DB connection

// middleware
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(contactRouter);

// test router
app.get("/", (req, res) => {
    res.send(`server is running on port ${process.env.PORT}`);
});
// server listening on port 9876
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
