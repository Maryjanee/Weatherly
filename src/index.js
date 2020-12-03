import './style.scss';
import Weather from './weather';
import displayInfo from './displayInfo';

const searchForm = document.querySelector('form');
const page = document.querySelector('body');
const header = document.querySelector('header');
const button = document.querySelector('button');
const results = document.querySelector('.results-section');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityName = document.querySelector('#city-name').value;

  if (cityName === '') {
    alert('please enter a valid city');
  } else {
    page.removeChild(header);
    button.style.display = 'block';
    results.style.display = 'block';
    const weather = new Weather(cityName);
    weather.getWeatherInfo()
      .then(results => {
        displayInfo(results);
      })
      .catch(error => console.log(error));
  }
});

button.addEventListener('click', () => {
  window.location.reload();
});
