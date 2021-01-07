"use strict";

$(function() {
	console.log("am working")
	$("li").addClass("")
	//AJAX call to OpenWeather API
	$.get("http://api.openweathermap.org/data/2.5/weather", {
		appid: openWeatherToken,
		q:     "San Antonio, US",
		units: "imperial"
	}).done(function(data) {
		console.log(`name: ${data.name}`)
		console.log(`temp: ${data.main.temp}`);
		console.log(`temp max: ${data.main.temp_max}`);
		console.log(`temp min: ${data.main.temp_min}`);
		console.log(`humidity: ${data.main.humidity}`);
		console.log(`wind: ${data.wind.speed}`);
		console.log(`sunrise: ${data.sys.sunrise}`);
		console.log(`sunset: ${data.sys.sunset}`);
		console.log(data.keys);
		console.log(data);

	});

	// let iconUrl = '<img src='http://openweathermap.org/img/wn/' +
	// data.weather[0].icon + '@2.png" width="50" height="50" />';
	
});
	