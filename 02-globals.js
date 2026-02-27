// -------
// Globals are things you can use anywhere in your program without declaring them
// -------

// 1) console
// used to print a message in the terminal or screen
console.log("hello world"); // output: hello world

// 2) setTimeout
// runs code after a delay (delay in milliseconds)
setTimeout(() => {
    console.log("hello world");
}, 5000); // output: *waits 5 seconds*
          //          hello world

// 3) setInterval
// runs code repeatedly every x milliseconds
setInterval(() => {
    console.log("hello world");
}, 5000); // output: hello world
          //         *waits 5 seconds*
          //         hello world
          //         *waits 5 seconds*
          //         hello world
          //         ...

// 4) __dirname
// shows the path of the folder where this file is located
console.log("__dirname:", __dirname);

// 5) __filename
// shows path and file name of this file
console.log("__filename:", __filename);

// 6) process
// gives info about your program and environment
console.log("Node version:", process.version);


        