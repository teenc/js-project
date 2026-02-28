// -------
// Modules let you share code between files
// -------

// variables to store the first and last name 
const firstName = "Lilo";
const lastName = "Akra";

// function to combine first and last name
function fullName() {
    return firstName + " " + lastName;
}

// export the variables and the function to ./04-modules-2.js
module.exports = { firstName, lastName, fullName };