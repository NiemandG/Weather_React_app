import Header from '../header/header';
import InputCity from './input-city';
function CurrentWeather({temp, feels_like, weather_description, cityname, pressure, humidity, wind_speed, wind_direction, cloud, code, weatherService}) {
    let str = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
      };
      function onSubmit(e){
          e.preventDefault();
          if(e.target.city.value !== ''){
            weatherService(e.target.city.value);
          }
      }

      if (code === 404){
        return(
          <div>
            <InputCity func={onSubmit}/>
            <h1>Город не найден!</h1>
          </div>
        )
      }
      if (code === 429){
        return(
          <div>
            <InputCity func={onSubmit}/>
            <h1>Превышен лимит запросов!</h1>
          </div>
        )
      }
      
      return (
        <div>
            <InputCity func={onSubmit}/>
            <div className="datetime">
                <h4>{cityname}, {str.toLocaleString("ru", options) }</h4>
            </div>
            <div>
                <h1>{temp}℃</h1>
                <h5>Ощущается как {feels_like}℃</h5>
            </div>
            <div>
                <h6>{weather_description}</h6>
            </div>
            <div>
                Ветер {wind_speed} м/с {wind_direction} Давление {pressure} Влажность {humidity}% Облачность {cloud}%
            </div>
          
        </div>
    );
}
  
export default CurrentWeather;