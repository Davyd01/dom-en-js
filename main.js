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


const slider = document.getElementById('slider'); 
const slides = document.getElementById('slides'); 
const slide = document.getElementsByClassName('slide'); 
const prevBtn = document.getElementById('prevBtn'); 
const nextBtn = document.getElementById('nextBtn'); 
const dots = document.getElementsByClassName('dot');




let currentSlide = 0;


function updateButtons() {
  if (currentSlide === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currentSlide === slide.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}


function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentSlide].classList.add('active');
}

updateButtons()
updateDots()






prevBtn.addEventListener('click', (event) => {


  
    if (currentSlide > 0) {
      slide[currentSlide].classList.remove('active')
      currentSlide--
      slide[currentSlide].classList.add('active')
    } 
    updateButtons()
    updateDots()
})




nextBtn.addEventListener('click', (event) => {
  if (currentSlide < slide.length - 1) {
    slide[currentSlide].classList.remove('active')
    currentSlide++
    slide[currentSlide].classList.add('active')
  } 
  updateButtons()
  updateDots()
})



  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      slide[currentSlide].classList.remove('active')

      currentSlide = i
      slide[currentSlide].classList.add('active')
      updateButtons()
      updateDots()
    })
  }
