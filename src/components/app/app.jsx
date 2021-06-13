import { Component} from 'react';
import { BrowserRouter as Router, Route,  Switch, Redirect } from 'react-router-dom'
import Header from '../header/header'
import Forecast from '../forecast-5-day/forecast'


import CurrentWeatherWrapper from '../current-weather/current-weather-wrapper/current-weater-wrapper'
export default class App extends Component {

  render() {
    return(
      <div>
         <Router>
         <Header/>
              <Switch>
                <Route path='/current'> <CurrentWeatherWrapper/> </Route>
                <Route path='/forecast'> <Forecast/> </Route>
                <Redirect to="/current"/>
              </Switch>
         </Router>

    </div>
    )
  }
}


