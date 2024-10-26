const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');
const regexContainer = [];


checkBtn.addEventListener('click', () => {
  console.log('clicked');
  if(!userInput.value) alert('Please provide a phone number');

  const cleanedInput = cleanInput(userInput);
  validateNumber(cleanedInput);
}) 

const validateNumber = (input) => {
  
}

const cleanInput = (input) => {
  //clean input logic
}

