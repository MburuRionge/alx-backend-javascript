const readline = require('readline');

//create an interface to read input from the user
const rl = readline.createInterface({
    input: Process.stdin,
    output: Process.stdout
});

//display the welcome message
console.log('Welcome to Holberton School, What is your name?');

//read the name of the user
rl.on('line', (input) => {
    console.log(`Your name is : ${input}`);
    //close the interface
    rl.close();
});

//handle the close event when the program is termitted
rl.on('close', () => {
    console.log('This important software is now closing');
});