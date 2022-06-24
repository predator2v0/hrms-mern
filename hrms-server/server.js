const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to hrms server!");
});
const PORT = 5500;
app.listen(process.env.PORT || 6699, () => {
    console.log("listening on port " + PORT);
});
