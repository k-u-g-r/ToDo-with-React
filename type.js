//add zod input expected from user
const zod = require("zod") ;

//input validation schema
//the schema can be written for any endpoint

//for the POST "/add-todo" endpoint
const addTodo = zod.object({
    "title": zod.string(),
    "description": zod.string() 
}) ;

//for the GET request, we need to just get back all the todos of a given user
// hence we need no input for that purpose

//for the PUT request

const updateTodo = zod.object({
    "id": zod.string()
}) ;

//to send the validation for use in the other files or directories
// we use the module.export function.


module.exports =  {
    addTodo: addTodo,
    updateTodo: updateTodo,
};