"use strict";

console.log("Hello from the javaScript main file.");

// alert("Money is the thing of the future.");
// alert("Trust me it is.");
// alert("No for real though.");

// will be either true or false
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed);

var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);

console.log("-----------Nov 6 2020 ------------")

function withNoParams() {
    return alert("Hello there");
}

function withParam(name) {
    return alert("Hello ther " + name);

}


function increments(x) {
    return x + 1
}

/* function can be define keyword function + function name
 parenthesis- with space for input (parameters) or not with makes
 it a anonymous function.
 return statements return the result of the function

* */
var four = increments(3);
var five = increments(increments(3));
var six = increments(increments(increments(3)));

// named function which is a declared function can be called before
// and after the function

function honkHorn() {
    return "beep beep";
}

//function expression cannot be called before but it can be called
//after.

var honkHorn2 = function () {
    return "beep beep";
}

// callback function when passed into parent function.
// curly braces define local scope withing a function.

// function sayHello(name ="Darlhem") {
//     alert("");
// }
//
// //a function with no return value
//
// function shout(message) {
//     alert(message.toUpperCase() + "!!!");
//     return message;
// }
//
// var returnValue = shout("Hello there");
// console.log(returnValue);
//

//default function parameters


// Scope is where a variable can be accessed
var globalVar = "Global variable"
function test() {
    var test2 = "Local variable";
    alert("look am local");

}



