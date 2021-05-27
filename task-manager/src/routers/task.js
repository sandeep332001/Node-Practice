const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

router.get("/tasks", (req, res) => {
  Task.find({})
    .then((task) => {
      res.send(task);
    })
    .catch((e) => {
      res.status(404).send();
    });
});

router.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(404).send(e);
    });
});

module.exports = router;
