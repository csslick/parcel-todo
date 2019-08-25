import $ from 'jquery';
import { getAllTodos, addTodo } from './data';
import { renderTodos, clearNewTodoInput } from './ui';
import '../css/index.scss';

// 할일 목록 초기화
window.addEventListener('load', () => {
  //console.log(getAllTodos());
  renderTodos(getAllTodos());
})

$('.new-todo').on('change', function(e){
  let title = this.value;
  console.log(title);
  addTodo({
    id: Date.now(),
    title: title,
    completed: false
  })
  clearNewTodoInput();
  renderTodos(getAllTodos());
})




