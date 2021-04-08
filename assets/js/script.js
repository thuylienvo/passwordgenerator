// Assignment code here
 const alphabetEl = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
 const specialCharEl = ['!', '@', '#', '?', '$', '*', '^'];
 var rem_pw;

// define variables for characters
var upper = ''
var lower = ''
var numb = ''
var special = ''

// Generate Password Prompts
// ================================================================
var generateBtn = document.querySelector("#generate");
   
// Prompt for length of password between 8 and 128 characters
function capturePwLength() {
    var pwLength = window.prompt("Please enter the number of characters you would like for your password. Must between 8 and 128.")
    console.log(pwLength)
    if(pwLength % 1 != 0 || pwLength <8 || pwLength >128) {
        window.alert("Error: You must input a whole number between 8 and 128.")
        pwLength = capturePwLength();
    };
    return pwLength
}

// Prompt for character property types 
function capturePwCharType() { 
    window.alert("Please select the password character criteria. Must select at least 1.")

    //var pwCharType = [upperCases, lowerCases, numbers, special] 
    var upperCases = confirm("Do you want uppercase letters in your password?")
    console.log(upperCases)
    var lowerCases = confirm("Do you want lowercase letters in your password?")
    console.log(lowerCases)
    var numbers = confirm("Do you want numbers in your password?")
    console.log(numbers)
    var special = confirm("Do you want special characters in your password?")
    console.log(special)
    var pwCharType = [upperCases, lowerCases, numbers, special] 
    if(upperCases == false && lowerCases == false && numbers == false && special ==false) {
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
    var upperC = pwCharEl[0]
    var lowerC = pwCharEl[1]
    var numbC = pwCharEl[2]
    var specialC = pwCharEl[3]
    // Randomly generate characters
    if( upperC === true) {
        upper = alphabetEl[Math.floor(Math.random() * alphabetEl.length)].toUpperCase()
        console.log("The uppercase selected is: " + upper)
    };
    if( lowerC === true) {
        lower = alphabetEl[Math.floor(Math.random() * alphabetEl.length)]
        console.log("The lowercase selected is: " + lower)
    };
    if( numbC === true) {
        numb = Math.floor(Math.random() * 9)
        console.log("The number selected is: " + numb)
    };
    if( specialC === true) {
        special = specialCharEl[Math.floor(Math.random() * specialCharEl.length)]
        console.log("The special character selected is: " + special)
    };

    // Starter PW
    var starterPW = upper + lower + numb + special

    // Generate password based on criteria selected
    // =============================================================
    var remaining = pwLengthEl - starterPW.length
    console.log('remaining: ' + remaining + ', pw length: ' + pwLengthEl + ' , starter pw: ' + starterPW + ' started length: ' + starterPW.length)

    var chars = ['upper', 'lower', 'number', 'special']
    for (rem_pw = 0; rem_pw < remaining; rem_pw++) {
        var true_ind = pwCharEl.indexOf(true)
        console.log("true: " + true_ind + ", i: " + rem_pw)

        if( chars[true_ind] === 'upper') {
            upper = alphabetEl[Math.floor(Math.random() * alphabetEl.length)].toUpperCase()
            starterPW = starterPW.concat(upper)
        }
        else if( chars[true_ind] === 'lower') {
            lower = alphabetEl[Math.floor(Math.random() * alphabetEl.length)]
            starterPW = starterPW.concat(lower)
        }
        else if( chars[true_ind] === 'number') {
            numb = Math.floor(Math.random() * 9)
            starterPW = starterPW.concat(numb)
        }
        else if( chars[true_ind] === 'special') {
            special = specialCharEl[Math.floor(Math.random() * specialCharEl.length)]
            starterPW = starterPW.concat(special)
        };
        console.log(starterPW)
        
    }

    var pw = 'User password here';

    return starterPW
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
