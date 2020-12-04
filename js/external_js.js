// console.log("Hello from external javaScript")
//
// alert('Welcome to my Website')
//
// var userInput = prompt("what is your favorite color?");
//
// alert("Great " + userInput + " is my favorite color too!")

// rented movies

// Little mermaid 3 days
// var mov1 = 3;
var mov1 = prompt("How many days would you like to rent the 'The Little Mermaid?")
// Brother bear 5 days
// var mov2 = 5;
var mov2 = prompt("How about 'Brother Bear' many days would you like to rent that one?")
// Hercules 1 day
// var mov3 = 1;
var mov3 = prompt("'Hercules' great movie how many days would you like to rent this?")
// price rented per day is $3
var price = 3;
// input is how many days
var add = (Number(mov1) +Number(mov2) + Number(mov3));
// add how many days times 3
var total = add * price;
// output is the total amount for all three movies
// console.log(total);
alert("for a total of " + add + " days, your total comes out to be $" + total + ".")



//
// // Work
//
// // 3 companies
// // input is the hours and amount
var workHours = prompt("How many hours did you work for google?")
// // Google $400 // hours 6
var googAmount = prompt("How about the hourly rate?")
// var google = 400 * 6; // // total for Google
var  googTotal = Number(googAmount) * Number(workHours)

// // Amazon $380 // hours 4
var workHours_2 = prompt("How many hours did you work for Amazon?")
// var amazon = 380 * 4;
var amAmount = prompt("How about the hourly rate?")
// // total for Amazon
var  amTotal = Number(amAmount) * Number(workHours_2)

// // Facebook $350 // hours 10
var workHours_3 = prompt("How many hours did you work for Facebook?")
// var faceBook = 350 * 10;
var faAmount = prompt("How about the hourly rate?")
// // total for Facebook
var  faTotal = Number(faAmount) * Number(workHours_3)
var total_2 = googTotal + amTotal + faTotal;
alert("Well here's the breakdown, hours at Google: " +
	workHours + " hours at Amazon: " + workHours_2 + " Facebook: " + workHours_3 + ".")
alert("And the total for hourly pay: 1. $" + googAmount + " 2. $" + amAmount + " 3. $" + faAmount + "." )
alert("Your total payment is : " + total_2 + ".")
// out total for three companies
console.log(total_2);
//
// // Student

// // student can enrolled if class !== full
var notfull = true;
var stuNotFull = confirm("The class, is it full?");
// // class schedule does not conflict with current
var stuConflict = confirm("Does the schedule effects your current one? ")
var schedule = true;
var current = true;

// // option result for the student
// console.log(notfull = schedule !== current);
var notfull = true;
var schedule = true;
var current = true;

// // offer
//
// // product offer conditions
// //product > 2 offer not expired
// var promo_1 = product > 2;
// //product >= 0 offer not expired
// var promo_2 = product >= 0;


