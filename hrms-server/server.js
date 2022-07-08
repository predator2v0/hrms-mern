const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/auth");

const app = express(); // express app.
const db = require("./config/dbConn"); // DB connection

// middleware
app.use(express.json());
app.use(authRouter);

// test router
app.get("/", (req, res) => {
    res.send(`server is running on port ${process.env.PORT}`);
});
// server listening on port 9876
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
