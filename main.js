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


// // Получаем элементы из HTML
// const nameInput = document.getElementById('name'); // Поле для имени
// const nameError = document.getElementById('name-error'); // Поле для ошибки
// const sendButton = document.getElementById('send-button'); // Кнопка

// // Добавляем обработчик события на кнопку
// sendButton.addEventListener('click', (event) => {
//   // event.preventDefault(); // Предотвращаем отправку формы

//   const nameValue = nameInput.value.trim(); // Значение из поля "Name"

//   if (validateName(nameValue)) {
//     // Если имя соответствует условиям, показываем его в консоли
//     console.log('Valid name:', nameValue);
//     nameError.style.display = 'none'; // Скрываем ошибку
//   } else {
//     // Если имя не соответствует условиям, показываем ошибку
//     nameError.textContent = 'Name must contain at least one uppercase letter and one digit.';
//     nameError.style.display = 'block';
//   }
// });

// // Функция проверки имени
// function validateName(name) {
//   const hasUppercase = /[A-Z]/.test(name); // Проверяем, есть ли заглавная буква
//   const hasDigit = /\d/.test(name); // Проверяем, есть ли цифра
//   return hasUppercase && hasDigit; // Имя валидно, если есть и заглавная буква, и цифра
// }


































class Calculator {
  add (a,b) {
    return a + b
  }

  subtract(a,b) {
    return a - b
  }

  multiply(a,b) {
    return a * b
  }
  divide(a,b) {
    if (b === 0) {
      throw new Error ("divide to 0 imposible")
    }
    return a / b
  }
}


const calc = new Calculator();

console.log(calc.add(5, 3)); 
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2)); 