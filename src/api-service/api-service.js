export default class WeatherService {
    city = 'Пермь'
    basicURL = `http://api.openweathermap.org/data/2.5/weather?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&q=`;
   
    getWeather = async (city) => {
      if(city !== undefined){
        const result = await fetch(this.basicURL + city);
        console.log(result)
        if (result.status === 404 ||result.status === 429){
          return {code: result.status}
        } 
        const res = await result.json();
        return this.getState(res);
      }

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


