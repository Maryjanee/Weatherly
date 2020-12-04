import './style.scss';
import Weather from './weather';
import { showAlert, displayInfo } from './displayInfo';

const searchForm = document.querySelector('form');
const page = document.querySelector('body');
const header = document.querySelector('header');


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cityName = document.querySelector('#city-name').value;

  if (cityName === '') {
    showAlert('please enter a valid city', 'error');
  } else {
    page.removeChild(header);

    const weather = new Weather(cityName);
    weather.getWeatherInfo()
      .then(results => {
        if (results.cod === 200) {
          displayInfo(results);
          showAlert('Success! Here are your results', 'success');
        } else {
          showAlert('There was an error, please select a new city', 'error');
        }
      });
  }
});
