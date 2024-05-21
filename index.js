// writing our own boilerplate for server
const express = require("express");
const { addTodo, updateTodo } = require("./type");
const { todo } = require("./database");
const cors = require("cors") ;
const { connectStorageEmulator } = require("firebase/storage");
//or we can write:
//const validator = require("./type") ;
//validator.addTodo, this will work

// same as const express = require("express") ;

const app = express();
const port = 8888;
app.use(express.json());
app.use(cors()) ;

app.listen(port, () => {
  console.log("the server is running");
});

app.get("/todo", async (req, res, next) => {
  const todoList = await todo.find({});
  res.json({
    todoList
  })
});

app.post("/add-todo", async (req, res, next) => {
  const incomingTodo = req.body;
  const todoValidator = addTodo.safeParse(incomingTodo);
  if (todoValidator.success == false) {
    res.status(411).json({
      message: "input validation failed",
    });
    return;
  }
  //add the new todo to the data base
  await todo.create({
    title: incomingTodo.title,
    description: incomingTodo.description,
    completed: false
  });
  res.json({
    message: "the to-do has been created",
  });
});

app.put("/done", async (req, res, next) => {
  const incomingUpdate = req.body;
  const updateValidator = updateTodo.safeParse(incomingUpdate);

  if (updateValidator.success == false) {
      res.status(411).json({
        message: "input validation failed",
      });
      return;
    }
  //update it in the database
  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  })
  res.json({
    "message": "task is done",
  })
});
