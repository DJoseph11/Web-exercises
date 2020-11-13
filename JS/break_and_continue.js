
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


