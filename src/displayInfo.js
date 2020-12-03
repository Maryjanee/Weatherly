const country = document.querySelector('.country-name');
const countryFlag = document.getElementById('country-flag');
const countryImg = document.querySelector('#country-image');
const date = document.getElementById('date');
const weatherIcon = document.getElementById('weather-icon');
const description = document.querySelector('.description');
const temperature = document.getElementById('temperature');
const feels = document.getElementById('feels-like');
const button = document.querySelector('button');
const resultsContainer = document.querySelector('.results-section');
const btnTempToggle = document.querySelector('.btn-temp');
const btnTempToggle2 = document.querySelector('.btn-temp2');
const btnsContainer = document.querySelector('.btn-container');

const displayInfo = ({
  weather, main, sys, name,
}) => {
  btnsContainer.id = "show";
  resultsContainer.id = 'show';
  countryFlag.src = `https://www.countryflags.io/${sys.country}/shiny/64.png`;
  countryImg.src = `https://source.unsplash.com/1600x900/?${sys.country} city`;
  date.innerText = new Date().toDateString();
  country.innerText = name;
  weatherIcon.src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  description.innerText = weather[0].description;
  temperature.innerText = Math.trunc(main.temp - 273.15);
  feels.innerText = Math.trunc(main.feels_like - 273.15);
  btnTempToggle.addEventListener('click', () => {
    temperature.innerText = Math.trunc(((main.temp - 273.15) * (9 / 5) + 32));
    feels.innerText = Math.trunc(((main.feels_like - 273.15) * (9 / 5) + 32));
    btnTempToggle.id = 'hide';
    btnTempToggle2.id = 'inline';
  });
  btnTempToggle2.addEventListener('click', () => {
    temperature.innerText = Math.trunc(main.temp - 273.15);
    feels.innerText = Math.trunc(main.feels_like - 273.15);
    btnTempToggle.id = 'inline';
    btnTempToggle2.id = 'hide';
  });
};

button.addEventListener('click', () => {
  window.location.reload();
});


export default displayInfo;