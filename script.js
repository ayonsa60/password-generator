// 1. when i press the button i want something to happen
// 2. prompt user with password criteria/ create variables 
// 3. prompt user with length of password (at least 8 character and less than 128)
// 4. prompt user to include certain character types
// 6. generate password
const numberChar = "0123456789";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const userCriteria = [];
const userPassword = [];

let button = document.getElementById('generate');

button.addEventListener('click', function(){
    let passwordLength = prompt('choose a length of at least 8 characters and no more than 128 characters');
    if (passwordLength  < 8 ){
        alert('password is too short');
        return null;
    }
    if (passwordLength  > 128 ){
        alert('password is too long');
        return null;
    }


    // confirm 
    let nChar = confirm('click okay if you want to include numbers in your password');
        if (nChar === true){
            userCriteria.push(...numberChar);
        }

    let uChar = confirm('click okay if you want to include upper case characters in your password');
        if (uChar === true){
            userCriteria.push(...upperChar);
        }

    let lChar = confirm('click okay if you want to include lowercase characters in your password');
        if (lChar === true){
            userCriteria.push(...lowerChar);
        }

    let sChar = confirm('click okay if you want to include special characters in your password');
        if (sChar === true){
            userCriteria.push(...specialChar);
        }

    for (let i = 0; i < passwordLength; i++){
        userPassword.push(userCriteria[Math.floor(Math.random() * userCriteria.length)]);
        console.log(userPassword.join(''));

    
    }
    document.getElementById('password').value = userPassword.join('');
});