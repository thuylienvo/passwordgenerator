// Assignment code here
 const alphabetEl = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
 const specialCharEl = ['!', '@', '#', '?', '$', '*', '^'];

// Prompts after user clicks Generate Password
// ================================================================
// Prompt for length of password between 8 and 128 characters
var generateBtn = document.querySelector("#generate");
   

function capturePwLength() {
    var pwLength = window.prompt("Please enter a number of characters between 8 and 128.")
    console.log(pwLength)
    if(pwLength % 1 != 0 || pwLength <8 || pwLength >128) {
        window.alert("Error: You must input a whole number between 8 and 128.")
        pwLength = capturePwLength();
    };
    return pwLength
}

//Prompt for character property types 

function capturePwCharType() { 
    var upperCases = confirm("Do you want uppercase letters?")
    console.log(upperCases)
    var lowerCases = confirm("Do you want lowercase letters?")
    console.log(lowerCases)
    var numbers = confirm("Do you want numbers?")
    console.log(numbers)
    var special = confirm("Do you want special characters?")
    console.log(special)
}


function generatePassword() {
    // Grabbing password requirements
    // =============================================================

    // User input password Length
    var pwLengthEl =  capturePwLength(); 

    // User input character properties
    var pwCharac = 


    // Generate password based on criteria selected
    // =============================================================

    var pw = 'xyz';
    return pw;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
