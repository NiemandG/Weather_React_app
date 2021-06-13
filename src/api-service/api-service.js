export default class WeatherService {
    basicURL = `http://api.openweathermap.org/data/2.5/weather?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&q=`;
    URLwithID = 'http://api.openweathermap.org/data/2.5/weather?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&id=';
    URLForecast = 'http://api.openweathermap.org/data/2.5/forecast?appid=bc7852253a5f56c860bc7883402b2f0a&lang=ru&units=metric&q=';

    getCurrentWeather = async (city) => {
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
      let tempArr = res.list;
      let ad = new Date(Date.parse(tempArr[0].dt_txt)) ;
      console.log(ad.getHours());
      let tempArr2 = tempArr.filter((item) => {
        return (new Date(Date.parse(item.dt_txt)).getDate() !== new Date().getDate() ) && ( ( new Date(Date.parse(item.dt_txt)).getHours() === 3 ) || 
        ( new Date(Date.parse(item.dt_txt)).getHours() === 9 ) || ( new Date(Date.parse(item.dt_txt)).getHours() === 15 ) || ( new Date(Date.parse(item.dt_txt)).getHours() === 21 ) );
      })
      res.list = tempArr2;
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


