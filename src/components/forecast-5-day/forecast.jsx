import {Component} from 'react';
import WeatherService from '../../api-service/api-service';
import './forecast.css';
import ForecastItem from './forecast-item/forecast-item'
import InputCity from '../current-weather/input-city/input-city'

export default class Forecast extends Component {
    weatherservice = new WeatherService();
    state = {
        mainArray: null
    }

    forecast = (city = 'Пермь') => {
        this.weatherservice.getForecast(city).then(
            (res) => {
                this.setState(
                    {
                        mainArray: res
                    }
                )
                console.log(this.state);
            }
        );
    }
    componentDidMount(){
        this.forecast();
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(e.target.city.value !== ''){
          this.forecast(e.target.city.value);
        }
        e.target.city.value = '';
    }
  
     render(){
         return(
             <div className="container">
                  <InputCity func={this.onSubmit}/>
                 <div className="forecast-main">
                    <ForecastItem/>
                    <ForecastItem/>
                    <ForecastItem/>
                    <ForecastItem/>
                    <ForecastItem/>
                 </div>

             </div>
            
         )
     }
}