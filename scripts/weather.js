const API_KEY_1 = "4e2177ee75d0475bee028ead2270af2d";
const CITY_ID_1 = "5334223";
const weatherIconBaseUrl = "http://openweathermap.org/img/w/";

// get current weather
fetch(
  `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID_1}&appid=${API_KEY_1}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    // update HTML elements with current weather data
    document.getElementById(
      "current-temp"
    ).innerText = `Temperature: ${data.main.temp.toFixed(0)} °C`;
    document.getElementById(
      "current-condition"
    ).innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById(
      "current-humidity"
    ).innerText = `Humidity: ${data.main.humidity}%`;

    // add weather icon
    const iconUrl = weatherIconBaseUrl + data.weather[0].icon + ".png";
    document.getElementById("weather-icon").setAttribute("src", iconUrl);
  })
  .catch((error) => {
    // handle errors
    console.error("Error getting current weather:", error);
  });

const API_KEY = "4e2177ee75d0475bee028ead2270af2d";
const CITY_ID = "5334223";
const COUNT = 3;

const forecastList = document.querySelectorAll(".forecast li");

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&cnt=${COUNT}&units=imperial&appid=${API_KEY}`
)
  .then((response) => response.json())
  .then((data) => {
    const forecasts = data.list;
    let currentDate = null;
    for (let i = 0; i < forecastList.length; i++) {
      const forecast = forecasts[i];
      const date = new Date(forecast.dt * 1000);

      // check if it's a new day
      if (currentDate === null || date.getDate() !== currentDate) {
        currentDate = date.getDate();
        const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
        const month = date.toLocaleString("en-US", { month: "long" });
        const dayOfMonth = date.toLocaleString("en-US", { day: "numeric" });
        forecastList[i].querySelector(
          ".forecast-date"
        ).innerText = `${dayOfWeek}, ${month} ${dayOfMonth}`;
      } else {
        // it's the same day as previous forecast, hide the date element
        forecastList[i].querySelector(".forecast-date").style.display = "none";
      }

      const iconCode = forecast.weather[0].icon;
      const temperature = Math.round(forecast.main.temp);
      forecastList[i].querySelector(
        ".forecast-icon"
      ).innerHTML = `<img src="https://openweathermap.org/img/w/${iconCode}.png" alt="${forecast.weather[0].description}" />`;
      forecastList[i].querySelector(
        ".forecast-temp"
      ).innerText = `${temperature}°F`;
    }
  });
