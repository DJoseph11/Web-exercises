"use strict";

$(function() {
	console.log("am working")
	

// ----------------------Lab #1-------------
// Goal: to capture the input of the search field

// Time Block

let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");

// Shortcuts for jQuery
let getWeather, http, info = {
	cityName:$("#cityNameDisplay"),
	humidity: $("#humidity"),
	location: $("#cityNameSearch"),
	temperature: $("#temperature"),
	tempMax: $("#weather-min-temperature"),
	tempMin: $("#weather-max-temperature"),
	sunrise: $(".weather-sunrise"),
	sunset: $(".weather-sunset"),
	searchButton: $("#cityNameSearchButton"),
	wind: $("#weather-wind-speed")
}

	http = "https://api.openweathermap.org/data/2.5/weather";
	
	getWeather = $.get(`${http}`, {
		APPID: openWeatherToken,
		q: "Miami ,US",
		units: "imperial"
	
	})

// keyboard Event to capture the enter key

info.location.keypress(function(e){
	// console.log(e)
	if(e.keyCode == 13) {
		info.searchButton.click();
	}
})

// click event chained to the keypress event

info.searchButton.click(function(){

	getWeather.done(function(data) {

	// this set the data on the html page layout

	info.cityName.text(`${data.name}`);
	info.temperature.text(`${data.main.temp}`);
	info.tempMax.text(`${data.main.temp_max}`);
	info.tempMin.text(`${data.main.temp_min}`);
	info.humidity.text(`${data.main.humidity}`);
	info.wind.text(`${data.wind.speed}`);
	info.sunrise.text(`${data.sys.sunrise}`);
	info.sunset.text(`${data.sys.sunset}`);
	console.log(data);
	console.log(data.name);


});


})


//

//----------------------------------------------


// --------------------|    |-------------------


// ----------------------Lab #2-------------
// goal to convert sunrise and sunset



let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);

console.log(myFunction() + " "+ months() + ", " + date)









//----------------------------------------------
})





