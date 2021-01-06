"use strict";

$(function() {
	console.log("am working")
	//AJAX call to OpenWeather API
	$.get("http://api.openweathermap.org/data/2.5/weather", {
		appid: OPEN_WEATHER_APP_ID,
		q:     "San Antonio, US",
		units: "imperial"
	}).done(function(data) {
		console.log(data);
	});

	let iconUrl = '<img src='http://openweathermap.org/img/wn/' +
	data.weather[0].icon + '@2.png" width="50" height="50" />';
	
});
	