// 초기값은 read-only
import init_todo_data from '../todo-data.json';

// todo_data 업데이트용 변수에 대입
let todo_data = init_todo_data;
export function getAllTodos() {
  return todo_data;
}

export function addTodo(todo){
  todo_data.push(todo);
}

export function removeTodo(id){
    todo_data = todo_data.filter(item => {
    return item.id !== parseInt(id);
  })
  console.log('tood_data = ' + todo_data);
}