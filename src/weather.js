
class Weather {
  constructor(city) {
    this.apiKey = '1a47b95fce72843fb086b93f9d54e7b8';
    this.city = city;
  }

  async getWeatherInfo() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
      return response.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  changeCity(city) {
    this.city = city;
  }
}


export default Weather;
