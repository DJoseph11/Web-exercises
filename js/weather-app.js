"use strict";

$(function() {
	console.log("am working")
	//AJAX call to OpenWeather API
	$.get("http://api.openweathermap.org/data/2.5/weather", {
		appid: openWeatherToken,
		q:     "San Antonio, US",
		units: "imperial"
	}).done(function(data) {
		console.log(data.name);
		console.log("temp: " + data.main.temp);
		console.log(`temp max: ${data.main.temp_max}`);
		console.log(`temp min: ${data.main.temp_min}`);
		console.log(`humidity: ${data.main.humidity}`);
		console.log(data.main.speed);
		console.log(data.main.sunrise);
		console.log(data.main.sunset);
		console.log(data);

	});

	// let iconUrl = '<img src='http://openweathermap.org/img/wn/' +
	// data.weather[0].icon + '@2.png" width="50" height="50" />';
	
});
	