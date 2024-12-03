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




document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Останавливаем стандартное поведение формы

  // Получаем данные формы с помощью FormData
  const formData = new FormData(this);
  
  // Преобразуем FormData в объект
  const formObject = Object.fromEntries(formData.entries());

  // Обнуляем ошибки
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';

  // Валидация
  let isValid = true;

  // Валидация имени: минимум две буквы и одна цифра
  if (!/^(?=.*[a-zA-Z]{2,})(?=.*\d).+$/.test(formObject.name)) {
    document.getElementById('nameError').textContent =
      'Name must have at least 2 letters and 1 number.';
    isValid = false;
  }

  // Валидация email: должен содержать @ и точку
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formObject.email)) {
    document.getElementById('emailError').textContent =
      'Email must contain "@" and a dot.';
    isValid = false;
  }

  // Если валидация успешна
  if (isValid) {
    document.getElementById('result').textContent =
      'Form submitted successfully!';
    console.log('Form Data:', formObject); // Вывод данных формы в консоль
  } else {
    document.getElementById('result').textContent = '';
  }
});

