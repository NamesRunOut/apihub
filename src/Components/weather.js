import React, { Component } from 'react';
import './style/weather.css'

class Weather extends React.Component{

    constructor(){
        super();
        this.state = {
            text: "",
            city: "",
            country: "",
            temp: 0,
            icon: ""
        }
        this.updateCity = this.updateCity.bind(this);
        this.updateText = this.updateText.bind(this);
        this.loadCity = this.loadCity.bind(this);
    }

    componentDidMount() {
           window.addEventListener('load', this.updateCity);
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d0ca8d3b92279927c97dbc726daa6886`)
         .then(response => response.json())
         .then(data => {this.assignValue(data.name); return data;})
         .then(data => this.setState({
                 city: data.name,
                 text: data.weather[0].description,
                 country: data.sys.country,
                 temp: (data.main.temp-273.15).toFixed(1),
                 icon: data.weather[0].icon
             }))
         .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    updateText() {
         const value = this.refs.wea.value;
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d0ca8d3b92279927c97dbc726daa6886`)
            .then(response => response.json())
            //.then(response => console.log(response))
            .then(data => this.setState({
                city: data.name,
                text: data.weather[0].description,
                country: data.sys.country,
                temp: (data.main.temp-273.15).toFixed(1),
                icon: data.weather[0].icon
            }))
            .catch(error => this.setState({ text: 'error fetching data '+error.message }))
        }

    assignValue(i){
         document.getElementById("wea").value=i;
    }

     removeValue(){
        document.getElementById("wea").value="";
     }

    render(){
        return(
            <div className="panel weather dark">
                <div className="data-container">
                    <div>
                        <h1>{this.state.temp}°C</h1>
                        <input onChange={this.updateText} type="text" ref="wea" id="wea" onClick={this.removeValue}></input>
                        , {this.state.country}
                    </div>
                    <div>
                        click location if not applicable
                    </div>
                </div>
                <div>
                {this.state.text}
                </div>
            </div>
        )
    }
}

export default Weather