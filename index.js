const ratingInputs = document.querySelectorAll('.input-rating')
const userRating = document.querySelector('#user-rating')
const rateForm = document.querySelector('#rate-form')
const submitBtn =document.querySelector('#submit-button')

const rateSection = document.querySelector('#rate-section')
const thankYou = document.querySelector('#thank-you')

const inputs = document.querySelectorAll('.rate-input')


for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];
  input.addEventListener('click', function(){
    console.log('click')
    input.classList.toggle('bg-orange-500')
    if (inputs[0].classList.contains('bg-orange-500')) {
      inputs[1].classList.remove('bg-orange-500')
      inputs[2].classList.remove('bg-orange-500')
      inputs[3].classList.remove('bg-orange-500')
      inputs[4].classList.remove('bg-orange-500')
    }else if(inputs[1].classList.contains('bg-orange-500')){
      inputs[0].classList.remove('bg-orange-500')
      inputs[2].classList.remove('bg-orange-500')
      inputs[3].classList.remove('bg-orange-500')
      inputs[4].classList.remove('bg-orange-500')
    }
    else if(inputs[2].classList.contains('bg-orange-500')){
      inputs[0].classList.remove('bg-orange-500')
      inputs[1].classList.remove('bg-orange-500')
      inputs[3].classList.remove('bg-orange-500')
      inputs[4].classList.remove('bg-orange-500')
    }
    else if(inputs[3].classList.contains('bg-orange-500')){
      inputs[0].classList.remove('bg-orange-500')
      inputs[1].classList.remove('bg-orange-500')
      inputs[2].classList.remove('bg-orange-500')
      inputs[4].classList.remove('bg-orange-500')
    }
    else if(inputs[4].classList.contains('bg-orange-500')){
      inputs[0].classList.remove('bg-orange-500')
      inputs[1].classList.remove('bg-orange-500')
      inputs[2].classList.remove('bg-orange-500')
      inputs[3].classList.remove('bg-orange-500')
    }else {
      inputs[0].classList.remove('bg-orange-500')
      inputs[1].classList.remove('bg-orange-500')
      inputs[2].classList.remove('bg-orange-500')
      inputs[3].classList.remove('bg-orange-500')
      inputs[4].classList.remove('bg-orange-500')
    }
  })
}


rateForm.addEventListener('submit', getData)
function getData(event){
  event.preventDefault()
  let formData = Object.fromEntries(new FormData(event.target))   
  console.log(formData)
  rateSection.classList.toggle('hidden')
  thankYou.classList.toggle('hidden')
  printUserRating(formData.rate)
}
function printUserRating(rate){
  userRating.textContent = rate
}