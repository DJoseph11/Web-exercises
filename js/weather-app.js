"use strict";

$(function() {
	console.log("am working")
	let http = "https://api.openweathermap.org/data/2.5/weather";
	let wUnits = "Imperial"
	


// ----------------------Lab #1-------------
// Goal: to capture the input of the search field

// Time Block

let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);

console.log(hour + ":" + minute);

let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");


// Shortcuts for jQuery
let info = {
	temperature: $("#temperature"),
	tempMax: $("#weather-min-temperature"),
	tempMin: $("#weather-max-temperature"),
	humidity: $("#humidity"),
	wind: $("#weather-wind-speed"),
	location: $("#cityNameSearch"),
	sunrise: $(".weather-sunrise"),
	sunset: $(".weather-sunset"),
	searchButton: $("#cityNameSearchButton")
}


// this set the data on the html page layout
// let displayData = function(data) {
// 	info.location.text(`${data.name}, ${data.sys.country}`);
// 	info.temperature.text(`${data.main.temp}`);
// 	info.tempMax.text(`${data.main.temp_max}`);
// 	info.tempMin.text(`${data.main.temp_min}`);
// 	info.humidity.text(`${data.main.humidity}`);
// 	info.wind.text(`${data.wind.speed}`);
// 	info.sunrise.text(`${data.sys.sunrise}`);
// 	info.sunset.text(`${data.sys.sunset}`);
	
// }


// keyboard Event to capture the enter key

		info.location.keypress(function(e){
			// console.log(e)
			if(e.keyCode == 13) {
				info.searchButton.click();
			}
		})

		info.searchButton.click(function(){
		
		$.get(`${http}`, {
			APPID: openWeatherToken,
			q: info.location.val() + ",US",
			units: "imperial"
		
		}).done(function(data) {
			info.location.text(`${data.name}`);
			info.temperature.text(`${data.main.temp}`);
			info.tempMax.text(`${data.main.temp_max}`);
			info.tempMin.text(`${data.main.temp_min}`);
			info.humidity.text(`${data.main.humidity}`);
			info.wind.text(`${data.wind.speed}`);
			info.sunrise.text(`${data.sys.sunrise}`);
			info.sunset.text(`${data.sys.sunset}`);
			console.log(data);
		
		
		});


	})


//----------------------------------------------


// --------------------|    |-------------------


// ----------------------Lab #2-------------












//----------------------------------------------
})





