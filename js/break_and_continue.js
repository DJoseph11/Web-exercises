
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
// user if they enter invalid input.

do {
	var userNum = Number(prompt("Pick a number."))
	if (userNum % 2 === 0) {
		alert("Your number is an even number")
	} else if (userNum > 50) {
		alert("Try again");
	} else if (userNum < 1) {
		alert("Try again");
	} else {
		alert("Your num")
		break;
	}

} while (true);



while (isNaN((userNum) || (userNum % 2 === 0) || (userNum < 1) || (userNum > 50))) {
	var userNum = prompt("please enter an odd number")
}  //instructor's way of doing the while loop


console.log("Number to skip is:" + userNum);

for (var i = 1; i < 50; i++) {
	if (i === userNum) {
		console.log("Yikes! skipping number: " + i);
		continue;
	} else if ( i % 2 === 0) {
		continue;
	} else {
		console.log("Here is an off: " + i);
	}

}


// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number
// the user entered.



