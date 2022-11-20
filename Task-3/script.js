const input = document.querySelector('#input')
const result = document.querySelector('#result')
const inputunit = document.querySelector('#from')
const resultunit = document.querySelector('#to')

inputunit.addEventListener('change', resultChange)
resultSelect.addEventListener('change', insertChange)

function resultChange() {
  if (
    inputunit.selectedOptions[0].value ===
    resultunit.selectedOptions[0].value
  ) {
    if (resultunit.selectedIndex < 2) {
      resultunit.selectedIndex += 1
    } else {
      resultunit.selectedIndex = 0
    }
  }
}



// convertor function 
function converter() {
  // invalid or no input zone
  if (input.value === '') {
    result.value = ''
    // alert appears
    alert('Please enter a valid value in the inputbox')
  }
  // degree celcius to farehiet
  else if (
    inputunit.selectedOptions[0].value === 'Celcius' &&
    resultunit.selectedOptions[0].value === 'Farenheit'
  ) {
    result.value = ((Number(input.value) * 9) / 5 + 32).toFixed(2) + ' ' + '°F' //formula to compute the value of farenhiet from  entered value of celcius
    console.log(result.value)
  }
  // farenheit to celcius
  else if (
    inputunit.selectedOptions[0].value === 'Farenheit' &&
    resultunit.selectedOptions[0].value === 'Celcius'
  ) {
    result.value =
      (((Number(input.value) - 32) * 5) / 9).toFixed(2) + ' ' + '°C' //formula to compute the value of celcius from  entered value of farenhiet
    console.log(result.value)
  }
  else if(
    inputunit.selectedOptions[0].value === 'Kelvin' &&
    resultunit.selectedOptions[0].value === 'Celcius'
  ){

    result.value =
    (Number(input.value) - 273.15).toFixed(2) + ' ' + '°C' //formula to compute the value of celcius from  entered value of farenhiet
  console.log(result.value)
  }
else if(
  inputunit.selectedOptions[0].value === 'Kelvin' &&
  resultunit.selectedOptions[0].value === 'Farenheit'
  ){
    result.value =
    (((Number(input.value)-273.15) *1.8)+32).toFixed(2) + ' ' + '°F' //formula to compute the value of celcius from  entered value of farenhiet
  console.log(result.value)
  }
  else if(
    inputunit.selectedOptions[0].value === 'Celcius' &&
    resultunit.selectedOptions[0].value === 'Kelvin'
  ){result.value =
    (Number(input.value) +273.15).toFixed(2) + ' ' + '°K' //formula to compute the value of celcius from  entered value of farenhiet
  console.log(result.value)

  }
else if(
  inputunit.selectedOptions[0].value === 'Farenheit' &&
  resultunit.selectedOptions[0].value === 'Kelvin'
  ){
    result.value =
    ((((Number(input.value) - 32) * 5) / 9)+273.15).toFixed(2) + ' ' + '°K' //formula to compute the value of celcius from  entered value of farenhiet
  console.log(result.value)
  }
 
  
}
function resetForm(){
  document.getElementById("myForm").reset();
} 