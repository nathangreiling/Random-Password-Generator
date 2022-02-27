// Assignment code here
function generatePassword() {
  var confirmLength = (prompt("How many characters will be included?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      confirm("Must be between 8-128 characters.");
      var confirmLength =(prompt("How many characters will be included?"));
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
