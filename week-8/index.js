function addTodo(event) {
  event.preventDefault()
  const input = document.querySelector('#new-todo') 
  const newTodo = input.value
  const div = document.querySelector('#todos')
  
  // list item setup
  const listItem = document.createElement('li')
  listItem.innerText = newTodo
  
  // we want to cross it out when we click on it
  listItem.addEventListener('click', (event) => {
    listItem.classList.add('finished')
  })
  
  
  // <li></li>
  // add to page
  div.appendChild(listItem)
  input.value = ''
}

const button = document.querySelector('#submit-button')
button.addEventListener('click', addTodo)
// document.addEventListener('submit', addTodo)