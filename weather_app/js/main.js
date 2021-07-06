const button = document.getElementById("submit");

button.addEventListener("click", () => {
    var city = document.getElementById("searchCity").value;

    const myKey = "7411bc3c887154df907e7c181ace14a8";
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`)
    .then((response) => response.json())
    .then((data) => {
                
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("currentTemp").innerHTML = "Currently: " + data.main.temp +"&#176" + "F";
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        document.getElementById("hiTemp").innerHTML = "Hi: " + data.main.temp_max + "&#176" + "F";
        document.getElementById("loTemp").innerHTML = "Lo: " + data.main.temp_min +"&#176" + "F";
        document.getElementById("forecast").innerHTML = "Forecast: " + data.weather[0].description;
        document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " mph";

    })
})
