const apiKey = "b13fd12657530a19a58d8a1b66a8f2aa"; // OpenWeatherMap API key

const getWeatherButton = document.getElementById("get-weather-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const conditions = document.getElementById("conditions");
const errorMessage = document.getElementById("error-message");
const weatherInfo = document.getElementById("weather-info");

getWeatherButton.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    errorMessage.textContent = "Please enter a city name.";
    errorMessage.style.display = "block";
    return;
  }

  try {
    // Fetch data from OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    console.log(data); // Display the data in json
    const { name, main, weather } = data;

    cityName.textContent = `Weather in ${name}`;
    temperature.textContent = `Temperature: ${main.temp}°C`;
    humidity.textContent = `Humidity: ${main.humidity}%`;
    conditions.textContent = `Conditions: ${weather[0].description}`;

    // Show the weather info section
    weatherInfo.style.display = "block";
    errorMessage.style.display = "none";
  } catch (error) {
    // Handle errors, such as invalid city name or network issues
    errorMessage.textContent = "Error: " + error.message;
    errorMessage.style.display = "block";
    weatherInfo.style.display = "none";
  }
}
