var x = 2;

while (x < 65536) {
	console.log(x);
	x = x * 2;
}


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates
// a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside
// of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being
// bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is
// a way get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
	var conesSold = Math.floor(Math.random() * 5) + 1;
	if (conesSold > allCones) {
		console.log(`Cant sell you any cones, you wanted ${conesSold} , but all ive got is ${allCones}`);
	} else {
		allCones = allCones - conesSold;
		console.log(`${conesSold} is how many you want? no problem! ${allCones} left to sell!`);
	}
} while (allCones > 0);

console.log("Yeah, i sold all of my ice cream");
// This expression will generate a random number between 1 and 5

