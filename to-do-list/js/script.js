'use strict'

const taskInput = document.getElementById('task-input')
const toDoContainer = document.getElementById('to-do-container')
const addButton = document.getElementById('add-btn')

const listItems = []

const renderList = () => {
  toDoContainer.innerHTML = ''

  listItems.forEach((item, i) => {
    const toDoItem = document.createElement('div')

    toDoItem.classList = 'to-do-item'
    toDoItem.innerHTML = `
        <div class="task">
            <div class="enumerator">${i + 1}</div>
            <p>${item}</p>
        </div>
        <button class="delete-btn" type="button" data-index=${i}><img src="./img/trash-ico.png" data-index=${i} /></button>
    `
    if (listItems.length === i + 1) {
      toDoItem.style.border = 'none'
    }

    toDoContainer.appendChild(toDoItem)
  })
}

const handleAddButtonClick = () => {
  listItems.push(taskInput.value)
  renderList()
}

const handleDeleteButtonClick = ({ target }) => {
  console.log(target.dataset.index)
  if ((target.type = 'button')) listItems.splice(target.dataset.index, 1)
  renderList()
}

toDoContainer.addEventListener('click', handleDeleteButtonClick)
addButton.addEventListener('click', handleAddButtonClick)