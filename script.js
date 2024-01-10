const apiKey = "6ba9d4d0eb2654004a2e4a1ae8bd07ad";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Search area
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();

  // Display error for incorrect city name input
  const errorDisplay = document.querySelector(".error");
  const weatherDisplay = document.querySelector(".weather");

  if (response.status == 404) {
    errorDisplay.style.display = "block";
    weatherDisplay.style.display = "none";
  } else {
    // Display weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    // Hide weather information and error display in the beginning
    errorDisplay.style.display = "none";
    weatherDisplay.style.display = "block";

    // Update weather icon base on weather condition
    const weatherIcon = document.querySelector(".weather-icon");
    const weatherImages = {
      Clouds: "clouds.png",
      Clear: "clear.png",
      Drizzle: "drizzle.png",
      Mist: "mist.png",
      Rain: "rain.png",
      Snow: "snow.png"
    };
    
    const weatherCondition = data.weather[0].main;
    weatherIcon.src = `images/${weatherImages[weatherCondition] || 'default.png'}`;
  }
}
