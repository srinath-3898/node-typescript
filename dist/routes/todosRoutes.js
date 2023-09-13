"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/all-todos", (req, res, next) => {
    res.status(200).json({ status: true, data: todos, message: "All todos" });
});
router.post("/add-todo", (req, res, next) => {
    const newTodo = { id: new Date().toISOString(), text: req.body.text };
    todos.push(newTodo);
    return res
        .status(201)
        .json({ status: true, data: newTodo, message: "Added todo successfully" });
});
router.put("/edit-todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(201).json({
            status: true,
            data: todos[todoIndex],
            message: "Todo updated successfully",
        });
    }
    return res
        .status(404)
        .json({ status: false, data: null, message: "No todo found" });
});
router.delete("/delete-todo/:todoId", (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    return res
        .status(200)
        .json({ status: true, data: todos, message: "Deleted todo successfully" });
});
exports.default = router;
