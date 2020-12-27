
let todos = document.querySelector('#todo-list');
let button = document.querySelector('.submit')
let todoInput = document.querySelector('#todo-input');
let msg = document.querySelector('#msg');

button.addEventListener('click', onSubmit )

function onSubmit(e) {
  e.preventDefault();

  if(todoInput.value===''){
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none'
    }, 1500)
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add('item');
  todos.appendChild(li);
  todoInput.value='';
}

