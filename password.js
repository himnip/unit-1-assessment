const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to Password Validator")
reader.question("Let us validate your password. Type it in. ", function(answer){
    let myString = (answer);
    myString.length = 10;
    if (answer == myString) {
        console.log("Success! Your password is valid.");
    } else {
        console.log("I'm sorry, your password is not valid.");
    }
});