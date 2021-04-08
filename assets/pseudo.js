//pseudo code

// Grabbing password requirements
// ==============================================================
// User input password Length
Display prompt "Select length of password between 8 and 128 characters"
    Create input box for user  
        - Input whole number only
            If user inputs a non whole number
                - Display alert with error
                - Run promp for length of password again

            If user inputs whole number value
                - Continue 

        1. If user inputs number outside of range 
                - Display alert with error
                - Run prompt for length of password again

// User input character properties
            If user does input number within range
                - Display prompt "Do you want xxxx?" 
                - Create input box with yes or no. 
                        
                    -lowercase
                    -uppercase
                    -numeric
                    -special character

                2. If user does not select at least one of the required characters
                    - Display alert with error. 
                    - Run prompts for characters selections again

                    
    // Generate password based on criteria selected
    // =============================================================

                        If user does select at least one of the required characters
                            - Generate password based on given parameters
                                - Select random character from each true statement

                                If lowercase is true, 
                                - create variable with randomly selected lowercase character.
                            
                                If false, do nothing. 
                            
                            If uppercase is true, 
                                - create variable with randomly selected uppercase character.
                            
                                If false, do nothing. 
                            
                            If numerical is true, 
                                - create variable with randomly selected number character. 
                                
                                If false, do nothing. 
                            
                            If special character is true, 
                                - create variable with randomly selected special character.
                            
                                If false, do nothing. 
                            
                                Add character variables together to create a 'starter pw' variable. 
                                Subtract the # of char in 'starter pw' from the password length to get the remaining number of char needed. 
                                Randomly select characters to fulfil the remaining char required for password and input into a 'remaining' var 
                                Add 'starter pw' var to 'remaining' var to create 'pw'  var. 
                            

//Display password 
// When user clicks Generate Password, display 'pw'  var.


