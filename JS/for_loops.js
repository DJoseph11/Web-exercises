/*while loops will check for a condition then run the body of the loop
*
*
* do while loops will always run at least once*/

// var num;
//
// do{
// 	if (num % 6) {
// 		console.log(num + "is not divisible by six")
// 		break
// 	}
//
// } while (num % 6 === 100 )
//
//
//
// do {
// 	var stringInput = prompt("What is the number")
// } while(stringInput.length <= 4)
//
//
//







function showMultiplicationTable(num) {
	for (var i = 1; i <= 10; i++) {
		var a = num
		a *= i;
		// console.log(num + " x " + i + " = " + a )
		console.log(`${num} x ${i} = ${a}` )
	}

}

// document.write(showMultiplicationTable(8)) //should output 7 x 1 = 7

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:

function rand() {
	for (var i = 1; i <= 10; i++) {
		var random = Math.floor((Math.random() * 200) + 20);
		if (random % 2 === 0) {
			// console.log( random + " Your number is even.");
			console.log(`Your number ${random} is even".`)
		} else {
			// console.log( random + " Your number is odd.")
			console.log(`Your number ${random} is odd".`)
		}
		// console.log(num + " x " + i + " = " + a )
		// console.log(`${num} x ${i} = ${a}` )
	}

}

rand();





for( var outer = 1; outer <= 9; outer++) {
	var output = "";
	for(var inner = 1; inner <= outer; inner ++) {     /////instructor solution
		output = output + outer
	}
	console.log(output);
}



// Create a for loop that uses console.log to create the output from 100 down to 5 in an increment of 5


for (var i = 100; i >= 5; i -= 5) {
	console.log(i);
}








