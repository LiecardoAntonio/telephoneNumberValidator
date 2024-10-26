const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');


// first case
const regexUS1 = /^1?\s?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
// second case (a little adjustment)
const regexUS2 = /^1(?:\s)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
const regexUS3 = /^1?(?:\s)?(\(\d{3}\)[\s-]?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}$/;
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
// (\(\d{3}\)[\s-]?|\d{3}[\s-]?): ensure the regex to only match a opening parenthesis together with closing parenthesis or none at all.

// > third section
// \d{3}[\s-]?\d{4}$/
// \d{3} : to check 3 digit consecutively
// [\s-]? : optional space or hyphen
// \d{4}$/ : followed by 4 digit consecutively at the end of the input string

console.log(regexUS1.test(' 555-555-5555'));
console.log(regexUS2.test(' 555-555-5555'));
console.log(regexUS2.test('1 (555 555-5555'));
console.log(regexUS3.test('1 (555 555-5555'));

checkBtn.addEventListener('click', () => {
  receiveInput();
}) 

userInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    console.log(event.key);
    receiveInput();
  }
})

clearBtn.addEventListener('click', () => {
  userInput.innerHTML = '';
  resultDiv.innerHTML = '';
  resultDiv.style.display = 'none';
})

const validateNumber = (rawInput, input) => {
  const result = regexUS3.test(input) || false;
  console.log('validating');
  resultDiv.style.direction = 'block';
  if(result) {
    resultDiv.innerHTML = `Valid US number: ${rawInput}`;
  } else {
    resultDiv.innerHTML = `Invalid US number: ${rawInput}`;
  }
  return;
}

const receiveInput = () => {
  console.log('clicked');
  console.log(userInput.value);
  if(!userInput.value) alert('Please provide a phone number');

  const cleanedInput = cleanInput(userInput.value);
  console.log(cleanedInput)
  validateNumber(userInput.value, cleanedInput);
}

const cleanInput = (input) => {
  console.log('cleaning');
  cleanRegex = /^[0-9-]/g;
  console.log(input.replace(cleanRegex, ''));
  return input.replace(cleanRegex, '');
}



