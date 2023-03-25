/* `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d7e3c1c20d5a9d5beea537b1a53c137` */
let currentCity = 'Austin'
const weatherContainer = document.getElementById('weather-container')
var city = document.getElementById('city')
async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=6d7e3c1c20d5a9d5beea537b1a53c137`)
    const data = await response.json()
    weatherContainer.innerHTML = 
    `
    <div>
        <h2 class="city">City: ${data.name}</h2>
        <h2 class="forecast-head">Current Forecast</h2>
        <p class="temp">Current Temp: ${data.main.temp}°F</p>
        <p class="high">High Temp: ${data.main.temp_max}°F</p>
        <p class="low">Low Temp: ${data.main.temp_min}°F</p>
        <p class="forcase">Forecast: ${data.weather[0].main}</p>
        <p class="humid">Humidity: ${data.main.humidity}</p>
    </div>
    `
}
const weatherSearchForm = document.getElementById('weatherSearch')

weatherSearchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const cityInput = weatherSearchForm.querySelector('#currentCity')
    currentCity = cityInput.value
    getWeather()
    cityInput.value = ''
})