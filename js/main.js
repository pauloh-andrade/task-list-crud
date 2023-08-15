'use strict'

const titleInput = document.getElementById('task-title')
const descriptionInput = document.getElementById('task-description')
const departamentInput = document.getElementById('task-departament')
const priorityInput = document.getElementById('task-priority')

const addButton = document.getElementById('add-btn')
const tbody = document.querySelector('tbody')

const priorityButton = document.getElementById('priority-btn')
const priorityUl = document.getElementById('priority-list')

const taskList = []

const renderList = () => {
  tbody.innerHTML = ''

  taskList.forEach((item, i) => {
    const tableRow = document.createElement('tr')

    tableRow.innerHTML = `
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.departament}</td>
      <td>${item.priority == 1 ? 'Baixa' : item.priority == 2 ? 'Moderada' : 'Alta'}</td>
      <td>
        ${
          item.duration
            ? item.duration
            : `
              <select class="text-field medium">
                <option value="--" selected>--</option>
                <option>1h</option>
                <option>2h</option>
                <option>4h</option>
                <option>8h</option>
                <option>16h</option>
                <option>32h</option>
                <option>64h</option>
              </select>
              <button class="ico-button" data-action="add-duration" data-index=${i}>+</button>
            `
        }
      </td>
      <td>
        ${
          item.price
            ? item.price
            : `<input class="text-field medium" type="number" name="task" placeholder="valor" /><button class="ico-button" data-index=${i} data-action="add-price">+</button>`
        }
      </td>
      <td><button class="ico-button delete-btn" data-index=${i}>x</button></td>
    `

    tbody.appendChild(tableRow)
  })
}

const createTask = (e) => {
  e.preventDefault()

  taskList.push({
    title: titleInput.value,
    description: descriptionInput.value,
    departament: departamentInput.value,
    priority: priorityInput.value
  })

  renderList()
}

const createPriorityList = () => {
  priorityUl.innerHTML = ''

  const priorityList = taskList.sort((a, b) => b.priority - a.priority)

  priorityList.forEach((item) => {
    const listItem = document.createElement('li')
    listItem.textContent = item.description
    priorityUl.appendChild(listItem)
  })
}

const handleClickTbody = ({ target }) => {
  const action = target.getAttribute('data-action')
  const index = target.getAttribute('data-index')

  if (target.classList.contains('delete-btn')) {
    taskList.splice(index, 1)
    renderList()
  } else if (action == 'add-duration') {
    const durationSelect = target.previousElementSibling
    taskList[index].duration = durationSelect.value

    const td = durationSelect.parentNode
    td.innerHTML = taskList[index].duration
  } else if (action == 'add-price') {
    const priceInput = target.previousElementSibling
    taskList[index].price = `R$ ${priceInput.value || 0},00`

    const td = priceInput.parentNode
    td.innerHTML = taskList[index].price
  }
}

tbody.addEventListener('click', handleClickTbody)
addButton.addEventListener('click', createTask)
priorityButton.addEventListener('click', createPriorityList)