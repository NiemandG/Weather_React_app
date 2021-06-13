import './forecast-item.css';
import sun from '../../../static/sun.png'
import cloudywithsun from '../../../static/cloudywithsun.png'
import rainy from '../../../static/rainy.png'
import mainlycloudy from '../../../static/mainlycloudy.png'
import partiallycloudy from '../../../static/partiallycloudy.png'
import snow from '../../../static/snow.png'
import mist from '../../../static/mist.png'
function ForecastItem(){
    

    return(
        <div className="forecast-item">
            <h4>Вс, 13 июня</h4>
            <div className="container">
                <div className="row aaa">
                    <div className="col-sm">
                        <span>ночь</span>
                        <img className="d-picture" src={sun} alt="weatherpicture" height="30px"/>
                    </div>
                    <div className="col-sm">
                        <span>утро</span>
                        <img className="d-picture" src={cloudywithsun} alt="weatherpicture" height="30px"/>
                    </div>
                    <div className="col-sm">
                        <span>день</span>
                        <img className="d-picture" src={rainy} alt="weatherpicture" height="30px"/>
                    </div>
                    <div className="col-sm">
                        <span>вечер</span>
                        <img className="d-picture" src={mainlycloudy} alt="weatherpicture" height="30px"/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ForecastItem;