// let list = document.getElementsByClassName('list');

// let listCount = list.length;

// let secondLi = list[0];

// let changeColor = document.getElementsByTagName('li')

// let listCount = changeColor.length

// let secondLi = changeColor[1]

// secondLi.textContent = "thats a new text"


// console.log(secondLi)


// let divColor = document.querySelector('.test')

// divColor.style.color = 'blue'



// const btnTest = document.getElementById('button')
// const inputField = document.querySelector('input')


// function pushToConsole() {
//   console.log(inputField.value)
// }

// btnTest.addEventListener('click', pushToConsole)

const ulToDo = document.getElementById('task-list')
ulToDo.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove()
  }
})

const addButton = document.getElementById('add-task').addEventListener('click', function() {
  let inputTask = document.getElementById('task-input')

  if (inputTask.value.trim() === '') {
    alert ('you have not added new task')
  } else {

    let listElement = document.createElement("li")
    let btnElement = document.createElement("button")

    
    let taskText = document.createTextNode(inputTask.value.trim())



    listElement.appendChild(taskText)

    
    btnElement.textContent = "delete"
    listElement.appendChild(btnElement)
    
    ulToDo.appendChild(listElement)

    inputTask.value = ''
  }
})