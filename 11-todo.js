let todo = [{
  name:'aa', dueDate: '2024-12-22'
}, {
  name:'bb',
  dueDate: '2024-12-22'

  }];

render();

function render (){
  let List = '';

  for (let i = 0; i < todo.length; i++) {
    const tadam = todo[i];
    //const name = tadam.name;
    const {name, dueDate} = tadam;
    //const dueDate = tadam.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todo.splice(${i}, 1);
        render();
      " class="del">Delete</button>
    `;
    List += html;
  }
  document.querySelector('.js-todo-list').innerHTML = List  

}

function addtodo(){
  const inputEl = document.querySelector('.js-name-input');

  const dateInput = document.querySelector('.js-due-date-input');
  const dueDate = dateInput.value;

  const name = inputEl.value;
  todo.push({
    name: name,
    dueDate: dueDate
  })
  inputEl.value = '';
  render();
}