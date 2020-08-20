import React, { Component } from 'react';
import './style/weather.css'

import location from './icons/location.png'
import cloud from './icons/cloud.svg'
import sun from './icons/sun.svg'
import cloudy_sun from './icons/cloudy_sun.svg'
import rain from './icons/rain.svg'
import snow from './icons/snow.svg'
import thunder from './icons/thunder_rain.svg'
import wind from './icons/wind.svg'
import wind_cloud from './icons/wind_cloud.svg'
import thunder_rain from './icons/thunder_rain.svg'

import cloudD from './icons/cloudD.svg'
import sunD from './icons/sunD.svg'
import cloudy_sunD from './icons/cloudy_sunD.svg'
import rainD from './icons/rainD.svg'
import snowD from './icons/snowD.svg'
import thunderD from './icons/thunder_rainD.svg'
import windD from './icons/windD.svg'
import wind_cloudD from './icons/wind_cloudD.svg'
import thunder_rainD from './icons/thunder_rainD.svg'

const WEATHER_KEY = ''

class Weather extends React.Component{

    constructor(){
        super();
        this.state = {
            text: "",
            city: "",
            country: "",
            temp: 0,
            icon: "",
            //weatherClass: "panel weather dark"
        }
        const icons = {
          "rain": rainD,
          "sun": sunD,
          "cloud": cloudD,
          "cloudy_sun": cloudy_sunD,
          "snow": snowD,
          "thunder": thunderD,
          "wind": windD,
          "wind_cloud": wind_cloudD,
          "thunder_rain": thunder_rainD
        }
        let source = sun
        this.updateCity = this.updateCity.bind(this);
        this.updateText = this.updateText.bind(this);
        this.loadCity = this.loadCity.bind(this);
        this.weatherIcon = this.weatherIcon.bind(this);
        this.icons = icons;
    }

    componentDidMount() {
           window.addEventListener('load', this.updateCity);
           window.addEventListener('load', this.updateTime);
        //   document.getElementById('wea').addEventListener('change', this.updateText);
           document.getElementById('wea').addEventListener('click', this.removeValue);
    }

    updateCity() {
     fetch('https://cors-anywhere.herokuapp.com/gd.geobytes.com/GetCityDetails')
        .then(response => response.json())
       // .then(data => console.log(data.geobytescity))
        /*.then(data => {this.setState({
            country: data.geobytescountry
        }); return data;})*/
        //.then(data => this.assignValue(data.geobytescity))
        .then(data => this.loadCity(data.geobytescity))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    loadCity(value){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=`+WEATHER_KEY)
         .then(response => response.json())
         .then(data => {this.assignValue(data.name); return data;})
         .then(data => {
           this.weatherIcon(data.weather[0].icon);
           this.setState({
                 city: data.name,
                 text: data.weather[0].description,
                 country: data.sys.country,
                 temp: (data.main.temp-273.15).toFixed(1),
                 icon: data.weather[0].icon
             })
           })
         .catch(error => this.setState({ text: error.message }))

    }

    updateText() {
         const value = this.refs.wea.value;
         //console.log(value)
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=`+WEATHER_KEY)
            .then(response => response.json())
            //.then(response => console.log(response))
            .then(data => {
              this.weatherIcon(data.weather[0].icon);
              this.setState({
                city: data.name,
                text: data.weather[0].description,
                country: data.sys.country,
                temp: (data.main.temp-273.15).toFixed(1),
                icon: data.weather[0].icon
            })
          })
            .catch(error => this.setState({ text: '' /*'error fetching data '+error.message*/ }))
        }

	weatherIcon(icon){
	console.log(icon)

            switch(icon){
              case '01d':
this.source='sun';
document.getElementById("weather-container").className="panel weather sunny";
              break;
              case '01n':
this.source='sun';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '02d':
this.source='cloudy_sun';
document.getElementById("weather-container").className="panel weather sunny";
              break;
              case '02n':
this.source='cloudy_sun';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '03d':
this.source='cloud';
document.getElementById("weather-container").className="panel weather sunny";
              break;
              case '03n':
this.source='cloud';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '04d':
this.source='wind_cloud';
document.getElementById("weather-container").className="panel weather rainy";
              break;
              case '04n':
this.source='wind_cloud';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '09d':
this.source='rain';
document.getElementById("weather-container").className="panel weather rainy";
              break;
              case '09n':
this.source='rain';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '010d':
this.source='rain';
document.getElementById("weather-container").className="panel weather rainy";
              break;
              case '010n':
this.source='rain';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '011d':
this.source='thunder';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '011n':
this.source='thunder';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '013d':
this.source='snow';
document.getElementById("weather-container").className="panel weather tainy";
              break;
              case '013n':
this.source='snow';
document.getElementById("weather-container").className="panel weather dark";
              break;
              case '50d':
this.source='wind';
document.getElementById("weather-container").className="panel weather sunny";
              break;
              case '50n':
this.source='wind';
document.getElementById("weather-container").className="panel weather dark";
              break;
              default:
this.source='sun';
document.getElementById("weather-container").className="panel weather dark";
            }
}

    assignValue(i){
         document.getElementById("wea").value=i;
    }

     removeValue(){
        document.getElementById("wea").value="";
    }

    updateTime(){
        let data = new Date();
        //Friday, 6 September
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        document.getElementById("date").innerHTML=weekday[data.getDay()]+', '+data.getDate()+' '+ months[data.getMonth()];
    }

    render(){
        return(
            <div className="panel weather sunny" id="weather-container">
                <div>
                    <h1>{this.state.temp}°</h1>
                </div>
                <div>
                    <p id="date"></p>
                    <img src={location} id="locationMarker" /><input type="text" ref="wea" id="wea" onChange={this.updateText}></input>
                    <p id="notice">click location if not applicable</p>
                </div>
                <div className="weaPic">
                  <img id="weaIcon" src={this.icons[this.source]} />
                  <p>{this.state.text}</p>
                </div>
            </div>
        )
    }
}

export default Weather
