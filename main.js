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



const tableContainer = document.getElementById('multiplication-table')

const table = document.createElement('table')
tableContainer.appendChild(table)

for (let i = 1; i <= 10; i++) {
  const row = document.createElement('tr')
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td')
    cell.textContent = i * j
    row.appendChild(cell)
  }
  table.appendChild(row)
}


// console.log('hel')
