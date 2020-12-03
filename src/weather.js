
class Weather {
  constructor(city){
    this.apiKey = "1a47b95fce72843fb086b93f9d54e7b8";
    this.city = city;
  }
  
  async getWeatherInfo (){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }
  
  changeCity(city) {
    this.city = city;
  }
  
}


export default Weather;

