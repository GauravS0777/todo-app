const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
    try{
        todos = await Todo.find().select("-__v");
        return res.status(200).json({ success: true, data: todos });
    }
    catch(err){
        return res.status(400).json({ success: false, msg: err });
    }
})

router.post("/", async (req, res) => {
    const { text } = req.body;
    newTodo = new Todo({ text: text });

    try{
        newTodo.save();
        res.status(201).json({ success: true, data: newTodo });
    }
    catch(err){
        return res.status(400).json({ success: false, msg: err });
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        await Todo.deleteOne({ _id: id });
        return res.status(200).json({ success: true, msg: "Successfully deleted" });
    }
    catch(err){
        return res.status(400).json({ success: false, msg: err });
    }
})

module.exports = router;
