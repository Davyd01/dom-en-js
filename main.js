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


function showRandomImg() {
  const randomNum = Math.floor(Math.random() *5) + 1

  const imageWay = `img/${randomNum}.jpg`

  const imgElem = document.getElementById('randomimg')
  imgElem.src = imageWay;
}

showRandomImg()

document.getElementById('randomBtn').addEventListener('click', showRandomImg)


