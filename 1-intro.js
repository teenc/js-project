// "const" is used to declare a variable that cannot be reassigned

const name = "lilo";
const age1 = 16;

// trying to change a const variable causes an error
age1 = 17; 

console.log(age1); 
// this line will not run because the error above stops execution



// "let" is used to declare a variable that CAN be reassigned later

let age2 = 13;

// Reassigning a let variable is allowed
age2 = 14;

console.log(age2); 
// This prints 14 because we reassigned the variable