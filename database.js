//create a mongoose schema
const mongoose = require("mongoose") ;

//connect to the database
mongoose.connect("mongodb+srv://lolroot:kakua1967@cluster0.70rlslg.mongodb.net/todos")
//creating of mongoose schema

const todoObject = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) ;

//cosnt model_name = mongoose.model('model_name', schema being followed) ;
const todoAdder = mongoose.model('todos', todoObject) ;

module.exports = { 
    todo: todoAdder
};