const express = require("express");
const app = express();
const cors = require("cors");
const todoRouter = require("./routes/todos");

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRouter);

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/todoDB", 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(err)
            console.log(err);
        else
            console.log("Connected to database.");
    }
);

app.listen(5000, () => {
    console.log("Server started on port 5000.");
})
