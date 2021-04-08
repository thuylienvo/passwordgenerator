// Assignment code here
 const alphabetEl = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
 const specialCharEl = ['!', '@', '#', '?', '$', '*', '^'];

// Prompts after user clicks Generate Password
// ================================================================
var generateBtn = document.querySelector("#generate");
   
// Prompt for length of password between 8 and 128 characters
function capturePwLength() {
    var pwLength = window.prompt("Please enter the number of characters you would like for your password. Must between 8 and 128. Must have at least 1 character selection.")
    console.log(pwLength)
    if(pwLength % 1 != 0 || pwLength <8 || pwLength >128) {
        window.alert("Error: You must input a whole number between 8 and 128.")
        pwLength = capturePwLength();
    };
    return pwLength
}

//Prompt for character property types 
function capturePwCharType() { 
    var upperCases = confirm("Do you want uppercase letters in your password?")
    console.log(upperCases)
    var lowerCases = confirm("Do you want lowercase letters in your password??")
    console.log(lowerCases)
    var numbers = confirm("Do you want numbers in your password??")
    console.log(numbers)
    var special = confirm("Do you want special characters in your password??")
    console.log(special)
    if(upperCases & lowerCases & numbers & special === false) {
        window.alert("Error: You must select at least 1 character type for your password.")
        pwCharType = capturePwCharType();
    };
    return pwCharType
}


function generatePassword() {
    // Grabbing password requirements
    // =============================================================

    // User input password Length
    var pwLengthEl =  capturePwLength(); 

    // User input character properties
    var pwCharEl = capturePwCharType();


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
