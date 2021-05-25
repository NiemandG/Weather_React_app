import Header from '../header/header';
import './current-weather.css'
import InputCity from './input-city';
import sun from '../../static/sun.png'
import cloudywithsun from '../../static/cloudywithsun.png'
import rainy from '../../static/rainy.png'
import mainlycloudy from '../../static/mainlycloudy.png'
import partiallycloudy from '../../static/partiallycloudy.png'
import snow from '../../static/snow.png'
function CurrentWeather({temp, feels_like, weather_description, cityname, pressure, humidity, wind_speed, wind_direction, cloud, code}) {
    let str = new Date();
    let weatherImage = null;
    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
      };

      if (code === 404){
        return(
          <div>
            <h1>Город не найден!</h1>
          </div>
        )
      }
      if (code === 429){
        return(
          <div>
            <h1>Превышен лимит запросов!</h1>
          </div>
        )
      }
      switch (weather_description) {
        case 'ясно':
          weatherImage = sun;
          break;
        case 'облачно с прояснениями':
          weatherImage = cloudywithsun
          break;
        case 'небольшой дождь':
          weatherImage = rainy;
          break;
        case 'пасмурно':
          weatherImage = mainlycloudy;
          break;
        case 'переменная облачность':
          weatherImage = partiallycloudy;
          break;
        case 'дождь':
          weatherImage = rainy;
          break;
        case 'небольшая облачность':
          weatherImage = cloudywithsun;
          break;
        case 'небольшой снег':
          weatherImage = snow;
          break;

      }
     if(cityname !== null){
      return (
        <div>
            {/* <InputCity func={onSubmit}/> */}
      
            <div className="d-flex justify-content-center">
                <h4>{cityname}, {str.toLocaleString("ru", options) }</h4>
            </div>
            <div className="d-flex justify-content-center">
                <h1>{temp}℃ <img src={weatherImage} alt="weatherpicture" height="50px"/></h1>
            </div>
            <h6 className="d-flex justify-content-center" >Ощущается как {feels_like}℃</h6>
            <div className="d-flex justify-content-center">
                <h5>{weather_description}</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="me-auto">
                  <p className="weather-add">Ветер {wind_direction}, {wind_speed} м/с</p>
                  <p className="weather-add">Давление {pressure}</p>
                </div>

                <div className="me-auto">
                  <p className="weather-add">Влажность {humidity}%</p>
                  <p className="weather-add">Облачность {cloud}%</p>
                </div>
            </div>
          
        </div>
    );
     } else return(
       <div>
         
       </div>
     )

}
  
export default CurrentWeather;