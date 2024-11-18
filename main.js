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


const divContainer = document.querySelector('.container')
const textParagraph = document.querySelector('.text')
const btnColor = document.getElementById('btn')

textParagraph.style.background = 'blue'


btnColor.addEventListener('click', changeColor);



function changeColor() {
  if (textParagraph.style.background ==='blue') {
    textParagraph.style.background = 'red'
  } else {
    textParagraph.style.background = 'blue'
  }
}


