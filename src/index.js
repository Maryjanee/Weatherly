import './style.scss';
import Weather from './weather';
import displayInfo from './displayInfo';

const searchForm = document.getElementById('search-city-form');

searchForm.addEventListener('submit', (e)=> {
     e.preventDefault();
     const cityName = document.querySelector('#city-name').value;
     
    if(cityName === ""){
      alert("please enter a valid city");
    }  
    else {
      const weather = new Weather(cityName);
      weather.getWeatherInfo()
        .then(results =>{
           displayInfo(results);
        })
        .catch(error => console.log(error));  
    }
})





