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


let savedLink = '';

document.getElementById('set-link').addEventListener('click', function() {
  let userUrl = prompt("enter a link")


if (userUrl === null || userUrl.trim() === '') {
  alert ('no links has been saved')
  return
}
if (userUrl.startsWith("http://") || userUrl.startsWith("https://")) {
  savedLink = userUrl
  alert ('link has been saved successfuly')
} else {
  alert('The link must start with "http://" or "https://"')
}
})


document.getElementById('redirect').addEventListener('click', function() {
  if (savedLink) {
    window.location.href = savedLink
  } else {
    alert ('no link has been saved, please set a link first')
  }
})





