import './style.scss';
import Weather from './weather';

const appStart = () =>{
  const weather = new Weather();
    weather.getWeatherInfo()
    .then(results => console.log(results))
    .catch(error => console.log(error));          
}




