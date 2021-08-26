const fs = require("fs");

const addTodo = (content) => {
  let todos = [];
  let todo = {
    content,
  };
  try {
    let readData = fs.readFileSync("data.json");

    todos = JSON.parse(readData);
  } catch (err) {
    console.log(err);
  }
  let duplicatetodos = todos.filter((todo) => todo.content === content);

  if (duplicatetodos.length === 0) {
    todos.push(todo);
    fs.writeFileSync("data.json", JSON.stringify(todos));
  }
};

const deleteTodo = (content) => {
  try {
    let readData = fs.readFileSync("data.json");

    todos = JSON.parse(readData);
    filteredTodos = todos.filter((todo) => todo.content != content);
    fs.writeFileSync("data.json", JSON.stringify(filteredTodos));

    return filteredTodos.length !== todos.length;
  } catch (err) {
    console.log(err);
  }
};

const readTodo = (content) => {
  try {
    let readData = fs.readFileSync("data.json");
    let todos = JSON.parse(readData);

    let filteredData = todos.filter((todo) => todo.content === content);

    console.log(filteredData[0]);
    return filteredData.length === 0;
  } catch (err) {
    console.log(err);
  }
};

const listAll = (content) => {
  try {
    let readData = fs.readFileSync("data.json");
    let todos = JSON.parse(readData);

    todos.forEach((element) => {
      console.log(element);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addTodo,
  deleteTodo,
  readTodo,
  listAll,
};
