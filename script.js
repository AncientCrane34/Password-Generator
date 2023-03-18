var upperCase = ["Q, W, E, R, T, Y, U, I, O, P, A, S, D, F, G, H, J, K, L, Z, X, C, V, B, N, M"]
var lowerCase = ["q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!, @, #, $, %, ^, &, *, ), (, ], [, }, {, +, =, >, <"]

function passwordoption () {
  var length = parseInt(
  prompt('How many characters do you want this password to be?'),
  10
);

if (Number.isNaN(length)){
  alert("Use just numbers, not words!")
}

if (length < 8){
  alert("Too easy to break.")
}

if (length > 128){
  alert("Your brain would melt with that length!")
}

var up = confirm("You want uppercase letters?")
var low = confirm("You want lowercase letters?")
var num = confirm("You want numbers?")
var special = confirm ("You want special characters?")

if(up === false && low === false && num === false && special === false){
  alert("Ok. Here is your new password: '1,2,3,4,5,6,7,8,9' ")
}
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
