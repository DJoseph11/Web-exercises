// console.log(returnYellow());


// build a function tht returns the string yellow


// verify that wer built a function called returnYellow

if (typeof returnYellow !== "function") {
	console.error("It's not a function");
}

if (returnYellow !== "Yellow") {
	console.error("returnYellow does not return the string 'Yellow'");
	console.error(returnYellow() + " returned instead");
}