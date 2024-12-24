

async function fetchWeatherData() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&appid=e4d084aafa9695d364e9e659d3ad7866');

    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    // console.log(data)

    const date = new Date(); 
    document.getElementById('update-time').textContent = `Last updated: ${date.toLocaleString()}`;


    document.getElementById('city-name').textContent = data.name
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp.toFixed(0)} °C`
    document.getElementById('weather-description').textContent = data.weather[0].description




  } catch (error) {
    console.error( 'Errorrrrrr')
  }
}

fetchWeatherData()


document.getElementById('refresh-btn').addEventListener('click', () => {
  fetchWeatherData()
})

