var Peny = {
	firstname: "tony",
	lastname: "brac",
	address : {
		street : "234",
		city: "Miami",
		phone: {
			home: "305-589-7545",
			cell: "786-258-6585"
		}
	}
};

function greet(person) {
	console.log("Hi" + person.firstname);
}

great(Peny);

//The code up deals with object literals and what that means is using a curly {}
// to create objects like the example above.

//a new property can be create with another  this kind of invokind is kind the dot method

function greet(person) {
	console.log(person.firstname + "'s' phone numbers are, Home: " +  person.address.phone.home+ " and number is, Cell: " + person.address.phone.cell);
}

greet({
	firstname: "Darlhem"

})