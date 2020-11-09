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

greet(Peny);

//The code up deals with object literals and what that means is using a curly {}
// to create objects like the example above.

//a new property can be created on the fly using the dot method. A goof example of that can
// be seen below where the phones numbers need to be pulled from [Peny] (person.address.phone.home)
// object(Peny).property(address).property(phone).property(home/cell)


function greet(person) {
	console.log(person.firstname + "'s' phone numbers are, Home: " +  person.address.phone.home+ " and number is, Cell: " + person.address.phone.cell);
}

/// Down below we can see that we change property value  on the fly that way you dont have to change
// the original object that was created.


greet({
	firstname: "Darlhem",
	address: {
		phones: {
			home: "758-854-2564",
			cell: "856-856-7546"
		}
	}
})
