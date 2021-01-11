"use strict";

$(function() {
	console.log("am working")
	

// ----------------------Lab #1-------------
// Goal: to capture the input of the search field

// Shortcuts for jQuery
var m, w, d, getWeather, http, info = {
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

// More Shortcuts

	http = "https://api.openweathermap.org/data/2.5/weather";

	// getWeather = $.get(`${http}`, {
	// 	APPID: openWeatherToken,
	// 	q:,
	// 	units: "imperial"
	
	// });

// keyboard Event to capture the enter key


info.location.keypress(function(e){
	console.log(e)
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
// goal to make and automatic date display module

// let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")


// console.log(weekday() + " "+ month() + ", " + date)


// code block for the months 


// function monthAll() { 
// 	{
// 	 month = [
// 		 month = "Jan", 
// 		 month = "Feb", 
// 		 month = "Mar", 
// 		 month = "Apr", 
// 		 month = "May", 
// 		 month = "Jun", 
// 		 month = "Jul", 
// 		 month = "Aug", 
// 		 month = "Sep", 
// 		 month = "Oct", 
// 		 month = "Nov", 
// 		 month = "Dec"
// 		]
		

// 		return m;
// 	}


// 	}



// code block for the weekdays


// function weekdayAll() {
// 	weekday = [
// 		weekday = "Sunday",
// 		weekday = "Monday",
// 		weekday = "Tuesday",
// 		weekday = "Wednesday",
// 		weekday = "Thursday",
// 		weekday = "Friday",
// 		weekday = "Saturday"

// 	  ]
	  
// 	 return w;
// 	console.log(w)
  
//   }

//   weekdayAll()
//   monthAll


//----------------------------------------------
})


// ----------------------Lab #2-------------


	
//----------------------------------------------