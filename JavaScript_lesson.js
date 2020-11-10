// // Excersice
console.log("-----------1---------------");
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = ++a;
console.log(c);

console.log("-----------After (a)---------------");

console.log(a, b, c);

console.log("--------------------------");

var d ="hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

console.log("--------------------------");
// // count and show or show and count.

var perplexed;
perplexed +2;
console.log(perplexed);

console.log("--------------------------");

var price = 2.7;
price.toFixed(2);

console.log(price.toFixed(2));

console.log("--------------------------")
// var price = "2.7";
// console.log(price.toFixed(2));
// // error because its looking for decimals point because its a string.
// (function isNanfunction() {
//     var isNanvalue = [
//         0,
//         1,
//         "",
//         "string",
//         "0",
//         "1",
//         "3.15",
//         Number.MAX_VALUE,
//         Infinity,
//         "true",
//         true,
//         "false",
//         false];
// //         console.log(isNanvalue.length)
//     for (var i = 0; i < isNanvalue.length; i++) {
//         var output = "";
//         output = output + isNaN(isNanvalue[i]);
//         console.log(i + ": " + output);
//     }
//
// })();

console.log("---------");

(function notTrue() {
    var value =
        [!true,

            !false,

            !!true,

            !!false,

            !!0,

            !!-0,

            !!1,

            !!-1,

            !!0.1,

            !!"hello",

            !!"",

            !!'',

            !!"false",

            !!"0",
        ];

// !!"" an empty string is false anything with something inside the string is true


    for (var i = 0; i < value.length; i++) {
        var output = "";
        output = output + value[i];
        console.log(i + ": " + output);
    }

})();

console.log("----------2--------");

var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase());

console.log(sample.toLowerCase());

console.log("--------------------------------");

console.log(sample + " Students");
console.log(sample + " Class");

console.log("--------------------------------");

console.log(sample.indexOf(["c"]));

console.log(sample.indexOf(["C"]));

console.log(sample.substring(6));

console.log("---------------3-----------------");

var a1 = 3;
var b2 = 5;
var h = 1;

total = (a1 * 3) + (b2 * 3) + (h * 3);

console.log("$" + total.toFixed(2));

console.log("---------------3.2-----------------");

var google = 400;
var amazon = 380;
var facebook = 350;
var weekG = 6;
var weekA = 4;
var weekF = 10;

googleTotal = google * weekG;
console.log("$" + googleTotal);

amazonTotal = amazon * weekA;
console.log("$" + amazonTotal);

facebook = facebook * weekF;
console.log("$" + facebook);
console.log("---------------Total-----------------");
total = googleTotal + amazonTotal + facebook;
console.log("$" + total.toFixed(2));

console.log("---------------3.3-----------------");
var student = true;
var classNotFull = true;
var classIsFull = false;
var currentSchedule = true;
var conflictedSchedule = false;

if (student == classNotFull && student == currentSchedule ) {
    console.log("You have enrolled in the \'.....\' class.");
} else {
    console.log("Sorry the class is full.");
}

console.log("---------------3.4-----------------");

// writing this problem using functions

function promo(offer) {
    return function (itemCount) {
        if (offer === "active" && itemCount >= 2) {
            console.log("Offer can be applied to items.");

        } else {
            console.log("The offer cannot applied to items.");
        }
        if (offer === "expired" && itemCount >= 1 ) {
            console.log("The offer is expired.");
        }
    }

}

var expiredOffer = promo("expired");
var activeOffer = promo("active");

expiredOffer(5);

console.log("------------------");

activeOffer(1);

console.log("---------------4-----------------");

var username = "codeup";
var password = "notastrongpassword";


// finding a to do this with function
//
// the password must be at least 5 characters
//     password >= 5
// the password must not include the username
//      password !== username(input) needs to do a search in password
//      !== not match part of username(input)
// the username must be no more than 20 characters
//      username <= 20
// neither the username or password can start or end with whitespace
//      to trim password and user name
console.log("-----------------Revise 4.0.1");

// start of revision

// var userName = "";
// var passWord = "";
//
// var userLogin = function psWord(userInput) {
//     return function (username, password) {
//         if (username.length <= 20 && password.length >= 5) {
//             console("Good to go.");
//         }
//         if (username === password) {
//
//         }
//
// }
//
//       var userLoginCheck =
// // end of second reversion
//
//     // for (var i = 0; userInput.length >= 5; i++) {
//     //     counter += i;
//     //     if (input === true) {
//     //         return passWord;
//     //     }
//     //
//     }

    // passWord("candy");

console.log("-----------Conditionals----------");

// typing out the example codes to get familiar with terms and logic

var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?");

if (weShouldDeleteStuff) {

} else {
    alert("Operation Canceled!");
}

var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");



}
/* ********* ternary operator conditional takes three operands for example in if/ else statement
*  you can have */


console.log("-----------------------------IF/else----------------------");

var huntingCriminals;


if (huntingCriminals) {    // the condition is where a true or false statement is place inside.
//    and based on the condition the yes or no question, or true or false determined on what
//    to run, either to execute the code that goes here or if the condition is false the else
//    statement get executed instead. (((TRUE))))

    /* a great example of a condition can be you in the old west cowboy days and you walked about to
     walked into saloon but before you left your dwelling this morning you set yourself a reminder
     to find opportunities to make some money, hey why not hint criminals always bring money
      so you set and if or else statement to remind you if I see a criminal that looks likes the
      wanted poster, dead or alive.

    *  if statement for that is you set reminder for yourself.
    *  "if (condition: criminal === seen) {
    *      you can log "I remember seeing one of these guys two days ago in the valley behind the famous
    *   or an alert"Money opportunity!!! you have seen this criminal"
      mountain} else {
            you can log something like this "never seen any of these guys, I should get that drink right about now"
           }"*/
} else {
// (((FALSE)))) once again the code that goes here only get executed if the condition that was
//    stated
}




console.log("----------------------------Ternary------------------------");

// Ternary is a shortcut for the (if) statement.


// as far as the ternary operaor its syntax is
// ***** "condition goes here"  ? "the true statement goes here" : "the false statement goes here"*****

var huntingCriminals =
    (ciminal === seen ) ? alert("Money opportunity!!! one of these criminal was seen") : "never seen any of these guys";


function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00'); // isMember is the condition here.
}                                           // "2.00" if isMember is true and "10.00" if isMember is false


//

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"




console.log(pizzaPreference);

var message;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong."
}



// var message = (success) ? "Operation was successful" : "Oops, something went wrong";



console.log("--------------------------Switch Statement---------------------")

// The switch statement can be used when more conditions need to be tested.
// the code below can be explain the same as above. THe condition is [dayOfWk] and it is expected
// for condition to process two conditions using the "or/ ||" operator which states that if either
// conditioin is true to execute the code. either left or the right of the ||/or symbol.
// and if either left of right is true then to execute the else statement for the alert.

if (dayOfWk ==="Sat" || dayOfWk === "Sun") { alert("Whoopee!");
	}
 else if (dayOfWk === "Fri") {
	 alert("TGIF!");
	}
else {
	alert("Shoot me now!");
}

////// down below is switch statement example to show how conditions can be created another way.

switch(dayOfWk) {
	case "Sat" :
	alert("Whoopee"); break;
	case "Sun" :
	alert("Whoopee");
	break;
	case "Fri" :
	alert("TGIF!");
	break;
	default :
	alert("Shoot me now!"); }

var dayOfWk;
switch(dayOfWk) {
	case "Sat" :
		alert("Whoopee"); break;
	case "Sun" :
		alert("Whoopee");
		break;
	case "Fri" :
		alert("TGIF!");
		break;
	default :
		alert("Shoot me now!"); }