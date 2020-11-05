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

d++
e++

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

console.log("--------------------------");

// var price = "2.7";
// console.log(price.toFixed(2));
// // error because its looking for decimals point because its a string.
(function isNanfunction() {
    var isNanvalue = [
        0,
        1,
        "",
        "string",
        "0",
        "1",
        "3.15",
        Number.MAX_VALUE,
        Infinity,
        "true",
        true,
        "false",
        false];
//         console.log(isNanvalue.length)
    for (var i = 0; i < isNanvalue.length; i++) {
        var output = "";
        output = output + isNaN(isNanvalue[i]);
        console.log(i + ": " + output);
    }

})();

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

// !!"" an empty string is false anything with something inside ithe string is true


    for (var i = 0; i < value.length; i++) {
        var output = "";
        output = output + value[i];
        console.log(i + ": " + output);
    }

})();

console.log("----------2--------");

var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase())

console.log(sample.toLowerCase())

console.log("--------------------------------");

console.log(sample + " Students");
console.log(sample + " Class")

console.log("--------------------------------");

console.log(sample.indexOf(["c"]));

console.log(sample.indexOf(["C"]));

console.log(sample.substring(6));

console.log("---------------3-----------------");

var a1 = 3;
var b2 = 5;
var h = 1;

total = (a1 * 3) + (b2 * 3) + (h * 3)

console.log("$" + total.toFixed(2))

console.log("---------------3.2-----------------");

var google = 400;
var amazon = 380;
var facebook = 350;
var weekG = 6;
var weekA = 4;
var weekF = 10;

googleTotal = google * weekG;
console.log("$" + googleTotal)

amazonTotal = amazon * weekA;
console.log("$" + amazonTotal)

facebook = facebook * weekF;
console.log("$" + facebook);
console.log("---------------Total-----------------");
total = googleTotal + amazonTotal + facebook
console.log("$" + total.toFixed(2));

// console.log("---------------3.3-----------------");



// console.log("---------------3.4-----------------");



// console.log("---------------4-----------------");

