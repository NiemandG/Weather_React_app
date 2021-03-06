import {Component, React} from 'react'
import WeatherService from '../../../api-service/api-service'
import CurrentWeather from '../current-weather/current-weather'
import InputCity from '../input-city/input-city'
import CityCodes from '../../../api-service/city_codes'
import WrapWeather from '../../wrappers/wrap-weather'
 export default class CurrentWeatherWrapper extends Component {

    weatherService = new WeatherService();
    cityCodes = new CityCodes();
    interval = null;
    state = {
      cityname: null, 
      cloud: null, 
      feels_like: null, 
      humidity: null, 
      pressure: null,
      temp: null,
      weather_description: null,
      wind_direction: null, 
      wind_speed: null, 
      code: null,
      random_city_values: {}
    }
    componentDidMount(){
      this.interval = setInterval(this.getRandomCity, 10000);
    }
    componentWillUnmount(){
      clearTimeout(this.interval)
      this.interval = null;
    }
    updateState = (city) => {
      this.weatherService.getCurrentWeather(city).then((res) => {
        this.setState({
          cityname: res.cityname,
          cloud: res.cloud,
          feels_like: res.feels_like,
          humidity: res.humidity,
          pressure: res.pressure,
          temp: res.temp,
          weather_description: res.weather_description,
          wind_direction: res.wind_direction,
          wind_speed: res.wind_speed,
          code: res.code
        })
      });
    }
    getRandomCity = () => {
     const b = Math.floor(Math.random() * 209579);
      this.weatherService.getCurrentWeather(this.cityCodes.codes[b]).then((res) => {
        const tempObj = {
          cityname_r: res.cityname,
          cloud_r: res.cloud,
          feels_like_r: res.feels_like,
          humidity_r: res.humidity,
          pressure_r: res.pressure,
          temp_r: res.temp,
          weather_description_r: res.weather_description,
          wind_direction_r: res.wind_direction,
          wind_speed_r: res.wind_speed,
          code_r: res.code
        }
        this.setState({
          random_city_values: tempObj
        })
      });
    }
     onSubmit = (e) => {
      e.preventDefault();
      if(e.target.city.value !== ''){
        this.updateState(e.target.city.value);
      }
      e.target.city.value = '';
  }
    render() {
      const {cityname, cloud, feels_like, humidity, pressure,temp,weather_description,wind_direction, wind_speed, code} = this.state;
      const  {cityname_r, cloud_r, feels_like_r, humidity_r, pressure_r,temp_r,weather_description_r,wind_direction_r, wind_speed_r, code_r} = this.state.random_city_values;
      if (cityname !== null || cityname_r !== null){
        return (
          <div>
            <div className="container">
                <WrapWeather left={<InputCity func={this.onSubmit}/>} right={<h5>???????????? ?? ?????????????????? ????????????:</h5>}/> 
                <WrapWeather
                  left={<CurrentWeather temp={temp} feels_like={feels_like} weather_description={weather_description}
                        cityname={cityname} pressure={pressure} humidity={humidity} wind_speed={wind_speed} wind_direction={wind_direction} cloud={cloud} code={code} 
                        />}
                  right={<CurrentWeather temp={temp_r} feels_like={feels_like_r} weather_description={weather_description_r}
                        cityname={cityname_r} pressure={pressure_r} humidity={humidity_r} wind_speed={wind_speed_r} wind_direction={wind_direction_r} cloud={cloud_r} code={code_r} />}
                />
            </div>
          </div>
        );
      } else {
        return(
          <div>

              <div className="container">
                <div className="row">
                  <div className="col-sm">
                  <InputCity func={this.onSubmit}/>
                  </div>
  
                  <div className="col-sm">
                  <p>???????????? ?? ?????????????????? ????????????:</p>
                  </div>
                </div>
                </div>
          </div>
  
        )
      }
  
    }
 }