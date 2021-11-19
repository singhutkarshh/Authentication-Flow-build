const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/authenticationRoute.js");
const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRouter);

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected!");
        app.listen(process.env.PORT, () => {
            console.log("Server started!");
        });
    })

app.get("/", (req, res) => {
    res.status(200).send("This is homepage!");
})