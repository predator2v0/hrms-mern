const mongoose = require("mongoose");

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("successfully connected to DB");
    })
    .catch((err) => {
        console.log("connection error: " + err);
    });
