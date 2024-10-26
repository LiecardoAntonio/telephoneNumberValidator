const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');


// first case
const regexUS1 = /^1?\s?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
// second case (a little adjustment)
const regexUS2 = /^1(?:\s)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
const regexUS3 = /^1(?:\s)?(\(\d{3}\)[\s-]?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}$/;
// explanation:
// > first section
// /^1? = matches optional 1 at the starting digit
// \s? = matches optional space in the very start or after 1 (this can lead to the input get accepted with space in the front)
// to fix the above problem we use the second case:
// /^1(?:\s)? : the space can only be added or not added only if the input starts with one

// > second section
// (\(?\d{3}\)?[\s-]?)?
// the above regex checks:
// \(? = optional opening parenthesis
// \d{3}\)? = 3 digit followed by optional closing parenthesis
// [\s-]? = followed by a space or hyphen (optional)
// )? = followed by an optional closing parenthesis
// however this regex allow a solo opening parenthesis without the closing parenthesis
// to fix this we use the third case:
// (\(\d{3}\)[\s-]?|\d{3}[\s-]?)

console.log(regexUS1.test(' 555-555-5555'));
console.log(regexUS2.test(' 555-555-5555'));
console.log(regexUS2.test('1 (555 555-5555'));
console.log(regexUS3.test('1 (555 555-5555'));

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

