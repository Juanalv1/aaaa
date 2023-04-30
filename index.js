const ratingInputs = document.querySelectorAll('.input-rating')
const userRating = document.querySelector('#user-rating')
const rateForm = document.querySelector('#rate-form')
const submitBtn =document.querySelector('#submit-button')

const rateSection = document.querySelector('#rate-section')
const thankYou = document.querySelector('#thank-you')

const inputs = document.querySelectorAll('.rate-input')


let selectedIndex = -1; // Variable que guardará el índice de la entrada seleccionada

for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];

  input.addEventListener('click', function(){
    console.log('click')
    input.classList.toggle('bg-orange-500')

    if (input.classList.contains('bg-orange-500')) {
      // Si se ha seleccionado una entrada, se deselecciona la entrada anterior
      if (selectedIndex >= 0 && selectedIndex !== index) {
        inputs[selectedIndex].classList.remove('bg-orange-500');
      }
      selectedIndex = index; // Se actualiza el índice de la entrada seleccionada
    } else {
      selectedIndex = -1; // Si se ha deseleccionado una entrada, se resetea el índice de la entrada seleccionada
    }
  });
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