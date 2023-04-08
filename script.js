const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce04d65523msh51bef89bb6632d9p145ddejsn432a529d3914',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp + "\u00B0";
			feels_like.innerHTML = response.feels_like + "\u00B0"
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp + "\u00B0"
			max_temp.innerHTML = response.max_temp + "\u00B0"
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees + "\u00B0"
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset


		})
		.catch(err => {
			console.error(err)
		});
}
getWeather("Kathmandu")

submit.addEventListener("click", (e) => {
	if(city.value =="" || city.value == " ") {
		getWeather("Kathmandu")
	} else{
	e.preventDefault();
	}
	getWeather(city.value)
})


