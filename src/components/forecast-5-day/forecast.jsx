import {Component} from 'react';
import WeatherService from '../../api-service/api-service'

export default class Forecast extends Component {
    weatherservice = new WeatherService();
    test = () => {
        this.weatherservice.getForecast('Пермь');
    }
    componentDidMount(){
        this.test();

    }
  
     render(){
         return(
             <div className="container">
                 <h1>FORECAST</h1>
             </div>
            
         )
     }
}