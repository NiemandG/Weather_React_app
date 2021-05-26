export default class WeatherService {
    basicURL = `http://api.openweathermap.org/data/2.5/weather?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&q=`;
    URLwithID = 'http://api.openweathermap.org/data/2.5/weather?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&id=';
    URLForecast = 'http://api.openweathermap.org/data/2.5/forecast?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&q=';

    getWeather = async (city) => {
      if(city !== undefined && isNaN(city)){
        const result = await fetch(this.basicURL + city);
        if (result.status === 404 ||result.status === 429){
          return {code: result.status}
        } 
        const res = await result.json();
        return this.getState(res);
      }
      if(city !== undefined && !isNaN(city)){
        const result = await fetch(this.URLwithID + city);
        if (result.status === 404 ||result.status === 429){
          return {code: result.status}
        } 
        const res = await result.json();
        return this.getState(res);
      }
    }

    getForecast = async (city) => {
      const result = await fetch(this.URLForecast + city);
      const res = await result.json();
      console.log(res)
      return res;
    }

    getState = async (res) => {
        return {
          cityname: res.name,
          cloud: res.clouds.all,
          feels_like: res.main.feels_like,
          humidity: res.main.humidity,
          pressure: res.main.pressure,
          temp: res.main.temp,
          weather_description: res.weather[0].description,
          wind_direction: res.wind.deg,
          wind_speed: res.wind.speed,
          code: res.cod
        }
    }


}


