export function renderTodos(todos){
  const todoArray = todos.map(todo => {
    const className = todo.completed ? 'completed' : '';
    return `
      <li data-id="${todo.id}" class="${className}">
        <span class="custom-checkbox"></span>
        <label>${todo.title}</label>
      </li>
    `
  })
  console.log(todoArray.join(''));
  document.querySelector('.todo-list').innerHTML = todoArray.join('');
}

export function clearNewTodoInput(){
  document.querySelector('.new-todo').value = '';
}