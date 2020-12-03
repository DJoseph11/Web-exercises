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
    return alert("Hello there " + name);

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


/* An object is a grouping of data and functionality. Data items contained in an
object are referred to as properties, and functions on an object are referred to as
methods. */

//New Object Instance

// to creates a custom object is can be declared bu using "new Object()"

var beer = new Object();
console.log(typeof beer); // object

// Object literals notation "{ }"

var beer = {}; // this is the same thing as above
console.log(typeof beer); // object

//properties can be assign to the object by using the "." dot notation or array notation.

var beer = {};

console.log(beer.brandName = "Dos Equis");

console.log(beer["Distributor"] = "Stephen & Stephens");

//Object properties are accessed in the same way they are set, either via dot notation or array notation.

