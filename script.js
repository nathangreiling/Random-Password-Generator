// Assignment code here

// Variables used 
var confirmLength = "";
var confirmSpecials;
var confirmNumerics;
var confirmUppers;
var confirmLowers;

//Arrays used to generate password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Prompt's user input
function generatePassword() {
  var confirmLength = (prompt("How many characters will be included?"));

// Loop for invalid answers 
  while(confirmLength <= 7 || confirmLength >= 129) {
      confirm("Must be between 8-128 characters.");
      var confirmLength =(prompt("How many characters will be included?"));
      } 

      var confirmSpecials = confirm("Include special characters?");
      var confirmNumerics = confirm("Include numeric characters?");    
      var confirmLowers = confirm("Include lowercase characters?");
      var confirmUppers = confirm("Include uppercase characters?");

    while(confirmSpecials === false && confirmNumerics === false && confirmUppers === false && confirmLowers === false) {
      confirm("At least one option must be selected.");
      var confirmSpecials = confirm("Include special characters?");
      var confirmNumerics = confirm("Include numeric characters?");    
      var confirmLowers = confirm("Include lowercase characters?");
      var confirmUppers = confirm("Include uppercase characters?");   
    } 
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
