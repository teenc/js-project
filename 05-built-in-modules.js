// ----------------
// Built-in Modules are modules that come with Node.js and can be used without installing anything
// ----------------

// 1) OS Module
const os = require('os');

console.log(os.platform()); // output: (depends on your operating system)
                            // example output: linux, darwin, win32, etc.


// 2) FS Module
const fs = require('fs');

const folder = './example';
const file = '/example.json'

// ---- fs.mkdir ----
// make a folder './example' in the same directory
fs.mkdirSync(folder);
console.log('folder created');

// ---- fs.exists ----
// check if folder exists
if (fs.existsSync(folder)) {
    console.log('folder exists');
}

// ---- fs.writeFile ----
// name content
const text = {
    "name": "lilo"
};

// convert object to JSON string
const json_string = JSON.stringify(text);

// create example.json and overwrite its content
fs.writeFileSync(folder + file, json_string);
console.log('file created and overwritten');

// ---- fs.exists ----
// check if file exists
if (fs.existsSync(file)) {
    console.log('file exists');
}

// ---- fs.writeFile ----
const content = fs.readFileSync(folder + file, 'utf-8');
const data = JSON.parse(content);
data.age = 16
fs.writeFileSync(folder + file, JSON.stringify(data));
console.log('updated file')

// ---- fs.readFile ----
// read the contents of a file (example.json) and parse it as JSON
const output = fs.readFileSync(folder + file, 'utf-8');
const example = JSON.parse(output);
console.log('name: ' + example.name + ' age: ' + example.age); // output: name: lilo age: 16

// ---- fs.unlink ----
// remove file /example.json that was previously created and edited
fs.unlinkSync(folder + file);
console.log('file removed');

// ---- fs.rmdir ----
// remove folder ./example that was previously created
fs.rmdirSync(folder);
console.log('folder removed');


// 3) Path Module
// The path module helps us work with file and folder paths
const path = require('path');

// Join parts of a path into one full path
const filePath = path.join(folder + file);
console.log("Path: " + filePath); // output: Path: /example/example.json


// 4) HTTP Module
const http = require ('http');
