import { Component } from 'react';
import WeatherService from '../../api-service/api-service'
import Header from '../header/header'
import CurrentWeather from '../current-weather/current-weather'

export default class App extends Component {
  weatherService = new WeatherService();
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
    code: null
  }
  updateState = (city) => {
    this.weatherService.getWeather(city).then((res) => {
      this.setState(res)
     
    });
  }
  // componentDidMount(){
    
  // }

  
  render() {
    const {cityname, cloud, feels_like, humidity, pressure,temp,temp_max,temp_min,weather_description,wind_direction, wind_speed, code} = this.state;
    
    return (
      
      <div>
        <Header/>
          <div className="container">
            <div className="row">
              <div className="col-sm">
              <CurrentWeather temp={temp} feels_like={feels_like} weather_description={weather_description}
                cityname={cityname} pressure={pressure} humidity={humidity} wind_speed={wind_speed} wind_direction={wind_direction} cloud={cloud} weatherService={this.updateState} code={code} />
              </div>

              <div className="col-sm">
              <CurrentWeather temp={temp} feels_like={feels_like} weather_description={weather_description}
                cityname={cityname} pressure={pressure} humidity={humidity} wind_speed={wind_speed} wind_direction={wind_direction} cloud={cloud} />
              </div>
            </div>
  

            </div>
      </div>
       
         
        
      
    );
  }
  

}

