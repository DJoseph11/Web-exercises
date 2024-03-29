"use strict";
console.log("test");
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(input) {

	if (input === "blue") {
		return "blue is the color of the sky";
	} else {
		if (input === "red") {
			return "Strawberries are red";

		} else if (input === "cyan") {
			return "I don't know anything about cyan";
		} else {
			return "I dont recognize this color" + input;
		}
	}

}

console.log(analyzeColor("blue"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(color) {
	switch (color) {
	case "blue":
		return "blue is the color of the sky";
	case "red":
		return "Strawberries are red";
	case "cyan":
		return "I don't know anything about cyan";
		break;
	default: return "I dont recognize this color";


}

}

console.log(analyzeColorSwitch(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What is your favorite color?")

console.log(analyzeColorSwitch(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
**/
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(num, total) {
	if (num === 0) {
		alert("No Discount");

		return num / 100 * total;
	} else if (num === 1) {
		alert("Your discout is " + (10 / 100 * total) + "%");
		return;
	} else if (num === 2) {
		alert("Your discout is " + (25 / 100 * total) + "%");
		return;
	} else if (num === 3) {
		alert("Your discout is " + (35 / 100 * total) + "%");
		return;
	} else if (num === 4) {
		alert("Your discout is " + (50 / 100 * total) + "%");
		return;
	} else if (num === 5) {
		alert("Your discout is " + (10 / 100 * total) + "%");
		return;
	}
}

calculateTotal(luckyNumber, 100);

// class

function calculateTotal(luckyNumber, billTotal) {
	switch (luckyNumber) {
		case 0:
			return billTotal;
		case 1:
			return billTotal - billTotal*.1;
		case 2:
			return billTotal - billTotal*.25;
		case 3:
			return billTotal - billTotal*.35;
		case 4:
			return billTotal - billTotal*.50;
		case 5:
			return 0;
		default:
			return "";


	}

}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


var inputTotal = prompt(" what is the total of bill?");

inputTotal = parseFloat(inputTotal);

alert("Your lucky number: " + luckyNumber + ", Price before discount: "
	+ inputTotal + ", Price after discount: " +  afterDiscount);

// calculateTotal(luckyNumber, inputTotal)

// function total(input) {
// var percent = calculateTotal(luckyNumber, inputTotal);
// var afterDiscount = percent / 100 * inputTotal;
//
// alert("Your lucky number: " + luckyNumber + ", Price before discount: "
// 	+ inputTotal + ", Price after discount: " +  afterDiscount);
// }
//
// total(inputTotal);

// calculateTotal(luckyNumber, 100);

// var inputTotal = prompt(" what is the total of bill?");

// calculateTotal(luckyNumber, inputTotal)
// var percent = calculateTotal(luckyNumber, inputTotal);
//
// function total(inputTotal) {
// 	var inputTotal = prompt(" what is the total of bill?");
//
// 	console.log(percent);
// 	discount = percent / 100 / 100;
// 	var afterDiscount = (discountt /100 * inputTotal);
// // 	console.log( afterDiscount)
// 	alert("Your lucky number is: " + luckyNumber + ", Price before discount is: "
// 		+ inputTotal + ", Price after discount: " + inputTotal - afterDiscount );
// }
//
// total(inputTotal);


//random = luckyNUmber
//beforeDiscount = total
//afterDiscount = luckyNumber
//

// Generate a random number between 0 and 6


var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// function isEven(num)

var checking = confirm("Would you like to enter a num?");
if (checking === true) {
	var userInput = prompt("Enter number: ")
	if (userInput % 2 === 0) {
		alert(userInput + " is even")
	} else  {
		alert(userInput + " is odd")
	}
alert("The number plus 100 is: " + (parseFloat(userInput) + 100));





var checking = confirm("Would you like to enter a num?");
if (checking === true) {
	var userInput = prompt("Enter number: ")
	if (userInput % 2 === 0) {
		alert(userInput + " is even")
	} else  {
		alert(userInput + " is odd")
	}
	if (userInput < 0) {
		alert("Number negative");
	} else {
		alert("Number is Positive")
	}
	alert("The number plus 100 is: " + (parseFloat(userInput) + 100));

}