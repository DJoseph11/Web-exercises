"use strict";

$(function() {3
	console.log("am working")
	let http = "https://api.openweathermap.org/data/2.5/weather";
	let wUnits = "Imperial"

	let testCity = $("#cityNameSearch").key

// ----------------------Lab #1-------------
// Goal: to capture the input of the search field
	
var testingLabOne = location.keypress(function(e){
	if(e.keyCode == 13) {
		searchButton.click();
	}
})

// var	k = {
// 	temperature = $("#temperature"),
// 	tempMax = $("#weather-min-temperature"),
// 	tempMin = $("#weather-max-temperature"),
// 	humidity = $("#humidity"),
// 	wind = $("#wind"),
// 	location = $("#cityNameSearch"),
// 	sunrise = $(".weather-sunrise"),
// 	sunset = $(".weather-sunset"),
// 	searchButton = $("#cityNameSearchButton")

// }

	


			






//----------------------------------------------

	//AJAX call to OpenWeather API


	// ${testCity}

	$.get(`${http}`, {
		APPID: openWeatherToken,
		q: "Chicago, US",
		units: wUnits
	
	}).done(function(data) {
		console.log(`name: ${data.name}`)
		console.log(`temp: ${data.main.temp}`);
		console.log(`temp max: ${data.main.temp_max}`);
		console.log(`temp min: ${data.main.temp_min}`);
		console.log(`humidity: ${data.main.humidity}`);
		console.log(`wind: ${data.wind.speed}`);
		console.log(`sunrise: ${data.sys.sunrise}`);
		console.log(`sunset: ${data.sys.sunset}`);
		
// testing of the search function
// let k = $("#cityNameSearch");

// var openWeatherData = function () {
// console.log("am also working")
// console.log(k.val())
// 	if( k.val() !== "") {
// 		k.searchLocation = $.get(`${http}`, {
// 			APPID: openWeatherToken,
// 			q:   `k.val(), US`,
// 			units: wUnits
		
// 		}).done(function(data) {
// 			// console.log(data)	
// 		})

// 		// $.getJSON(k.searchLocation, function(data) {
// 			// console.log(data)
// 		// })
// 	};
// } 

// console.log(openWeatherData($("#cityNameSearch").key()))



		console.log(data);


	});

// ${cityNameSearch}
})

	// info = {
	// 	settings = {
	// 		temperature: $(this.#temperature),
	// 		temp_max: $(this.#weather-min-temperature),
	// 		temp_min: $(this.#weather-max-temperature),
	// 		humidity: $(this.#humidity),
	// 		wind: $(this.#wind),
	// 		location: $(this.#cityNameSearch),
	// 		sunrise: $(weather-sunrise),
	// 		sunset: $(weather-sunrise)
	// 	},


	// }
	

	// let iconUrl = '<img src='http://openweathermap.org/img/wn/' +
	// data.weather[0].icon + '@2.png" width="50" height="50" />';
	



// let k, WeatherMod = {
// 	settings = {

// // The data that I need for the weather card

// 		temperature: $(this.#temperature),
// 		temperatureMax: $(this.#weather-min-temperature2),
// 		temperatureMax: $(this.#weather-max-temperature3),
// 		humidity: $(this.#humidity),
// 		location: $(cityNameSearch),
// 		wind: $(weather-wind-speed),
// 		searchButton: $(this.#cityNameSearchButton)
// 	}
// },

// // init will be called to start

// init: function() {
// 	k = this.settings;
// 	this.bindUIActions();
// 	k.cityNameSearch.keypress(function(e){
// 		if(e.keyCode == 13) {
// 			k.searchButton.click();
// 		}
// 	});
// },

// bindUIActions: function() {
// 	k.searchButton.click(function() {
		
// 	});
	
// }
	

// var openWeatherData = function (searchLocation) {

// 	if( k.location.val() !== "") {
// 		k.searchLocation = $.get(`${http}`, {
// 			APPID: openWeatherToken,
// 			q:   `k.location.val(), US`,
// 			units: wUnits
		
// 		})
// 	};
// } 




