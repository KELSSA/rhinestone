const express = require("express");
const router = express.Router();
let userTodo = require("../models/Todo");

// router apis

router.get("/", (req, res) => {
  res.send(" the todo apis are woking");
});

// create the todos

router.post("/add", (req, res) => {
  var addition = new userTodo(req.body);
  addition
    .save()
    .then((todoSaved) => res.send(todoSaved))
    .catch((err) => res.send(err));
});

// update the todos

router.put("/update/:id", (req, res) => {
  userTodo
    .findOneAndUpdate(req.params.id, req.body, { new: false })
    .then((todos) => res.send(todos))
    .catch((err) => res.send(err));
});

//edit the todos

router.delete("/delete/:id", (req, res) => {
  userTodo
    .findOneAndDelete(req.params.id)
    .then((todo) => res.send(todo))
    .catch((err) => res.send(err));
});

//get all the todos
router.get("/all", (req, res) => {
  userTodo.find((err, todos) =>
    err ? res.status(400).send("error occured") : res.json(todos)
  );
});

module.exports = router;
