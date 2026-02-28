// -------
// Modules let you share code between files
// -------

// import everything from 04-modules-1.js
const { firstName, lastName, fullName } = require ('./04-modules-1.js');

// use the variables 
console.log(firstName); // output: Lilo
console.log(lastName); // output: Akra

// use the function
console.log(fullName()); // output: Lilo Akra