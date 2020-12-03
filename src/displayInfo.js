const country = document.querySelector('.country-name');
const countryFlag = document.getElementById('country-flag');
const countryImg = document.querySelector('#country-image');
const date = document.getElementById('date');
const weatherIcon = document.getElementById('weather-icon');
const description = document.querySelector('.description');
const temperature = document.getElementById('temperature');
const feels = document.getElementById('feels-like');


const displayInfo = (results) => {
  countryFlag.src = `https://www.countryflags.io/${results.sys.country}/shiny/64.png`;
  countryImg.src = `https://source.unsplash.com/1600x900/?${results.sys.country} city`;
  date.innerText = new Date().toDateString();
  country.innerText = results.name;
  weatherIcon.src = `http://openweathermap.org/img/w/${results.weather[0].icon}.png`;
  description.innerText = results.weather[0].description;
  temperature.innerText = Math.trunc(results.main.temp - 273.15);
  feels.innerText = Math.trunc(results.main.feels_like - 273.15);
};

export default displayInfo;