import todo_data from '../todo-data.json';

export function getAllTodos() {
  return todo_data;
}

export function addTodo(todo){
  todo_data.push(todo);
}