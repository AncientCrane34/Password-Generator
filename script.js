var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '[', ']', '{', '}', '+', '=', '<', '>'];

function passwordoptioninput () {
  var length = parseInt(
  prompt('How many characters do you want this password to be?'),
  10
);

if (Number.isNaN(length)){
  alert("Use just numbers, not words.")
  return;
}


if (length < 8){
  alert("Too easy to break.")
  return;
}


if (length > 128){
  alert("Your brain would melt with that length.")
  return;
}

var up = confirm("You want uppercase letters?");
var low = confirm("You want lowercase letters?");
var num = confirm("You want numbers?");
var special = confirm ("You want special characters?");

if(up === false && low === false && num === false && special === false){
  alert("Ok. Here is your new random password: '123456789' ")
  return;
}
var passwordoptions = {
  length: length,
  up: up,
  low: low,
  num: num,
  special: special,
};
return passwordoptions;
}

function randomGet(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length);
  var ranElement = arr[ranIndex];
  return ranElement;
}

function generatePassword() {
  var options = passwordoptioninput();
  var result = [];
  var posChar = [];
  var guarenteChar = [];
  if (!options) return null;
  if (options.low) {
    posChar = posChar.concat(lowerCase);
    guarenteChar.push(randomGet(lowerCase));
  }
  if (options.high) {
    posChar = posChar.concat(upperCase);
    guarenteChar.push(randomGet(upperCase));
  }
  if (options.num) {
    posChar = posChar.concat(numbers);
    guarenteChar.push(randomGet(numbers));
  }
  if (options.special) {
    posChar = posChar.concat(symbols);
    guarenteChar.push(randomGet(symbols));
  }
  for (var i = 0; i < options.length; i++) {
    var possCha = randomGet(posChar);
    result.push(possCha);
  }
  for (var i = 0; i < guarenteChar.length; i++) {
    result[i] = guarenteChar[i];
  }
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
