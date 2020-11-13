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

var random = Math.floor((Math.random() * 200) + 20)

function rand(random) {
	for (var i = 1; i <= 10; i++) {
		var a = random;
		a *= i;
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

rand(random);


