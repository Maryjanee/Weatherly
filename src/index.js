import './style.scss';
import Weather from './weather';
import displayInfo from './displayInfo';

const searchForm = document.querySelector('form');
const page = document.querySelector('body');
const header = document.querySelector('header');


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityName = document.querySelector('#city-name').value;

  if (cityName === '') {
    alert('please enter a valid city');
  } else {
    page.removeChild(header);

    const weather = new Weather(cityName);
    weather.getWeatherInfo()
      .then(results => {
        if (results.cod === 200) {
          displayInfo(results);
        } else {
          alert('there was an error');
        }
      });
  }
});
