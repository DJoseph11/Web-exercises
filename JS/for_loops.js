/*while loops will check for a condition then run the body of the loop
*
*
* do while loops will always run at least once*/

;





function showMultiplicationTable(num) {
	for (var i = 1; i <= 10; i++) {
		var a = num
		a *= i;
		// console.log(num + " x " + i + " = " + a )
		console.log(`${num} x ${i} = ${a}` )
	}

}

document.write(showMultiplicationTable(8)) //should output 7 x 1 = 7