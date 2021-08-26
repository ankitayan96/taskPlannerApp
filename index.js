const todos = require("./todos.js");
let command = process.argv[2];

if (command === "add") {
  todos.addTodo(process.argv[3]);
} else if (command === "remove") {
  let deleted = todos.deleteTodo(process.argv[3]);
  deleted
    ? console.log("deleted successfully")
    : console.log("content not found");
} else if (command === "read") {
  let readData = todos.readTodo(process.argv[3]);
  !readData
    ? console.log("read Successfully")
    : console.log("read data not found");
} else if (command === "listAll") {
  todos.listAll();
}
