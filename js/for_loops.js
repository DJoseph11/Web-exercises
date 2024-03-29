/*while loops will check for a condition then run the body of the loop
*
*
* do while loops will always run at least once*/

function showMultiplicationTable(num) {
	for (var i = 1; i <= 10; i++) {
		var a = num
		a *= i;
		// console.log(num + " x " + i + " = " + a )
		console.log(`${num} x ${i} = ${a}` )
	}

}

document.write(showMultiplicationTable(8)) //should output 7 x 1 = 7


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

console.log(rand());

// Triangle number solution

for( var i = 1; i <= 9; i++) {
	var output = "";
	for(var inner = 1; inner <= i; inner ++) {     /////instructor solution
		output = output + i;
	}
	console.log(output);
}

// Create a for loop that uses console.log to create the output from 100 down to 5 in an increment of 5


for (var i = 100; i >= 5; i -= 5) {
	console.log(i);
}

// for ( var counter = 1; counter < 5; counter++) {
// 	console.log('Inside the loop:' + counter);
// }
// console.log('Outside the loop:' + counter);

// Inside the loop:1
// Inside the loop:2
// Inside the loop:3
// Inside the loop:4
// Inside the loop:5

// using the var keyword in the initialize makes counter available in the global scope
// while using the let keyword makes counter Inaccessible outside its local scope
// this will throw a Uncaught reference error: counter is not defined






