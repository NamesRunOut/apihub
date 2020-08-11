import React, { Component } from 'react';

class Weather extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "",
            city: ""
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
        .then(data => this.setState({
            city: data.geobytescity,
            text: ""
        }))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
      this.updateText();
    }

    loadCity(){
        const value = this.refs.wea.value;
        //console.log(value)
        this.setState(prevState => {
                return {
                  city: value,
                  text: prevState.text
                }
              });
        this.updateText();
    }

    updateText() {
        let weather;
         fetch('api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=d0ca8d3b92279927c97dbc726daa6886')
            .then(response => response.json())
            .then(data => console.log(data, `api.openweathermap.org/data/2.5/weather?q=`+this.state.city+`&appid=d0ca8d3b92279927c97dbc726daa6886`))
            .then(data => this.setState({
                text: data.weather[0].description,
                city: data.name
            }))
            .catch(error => this.setState({ text: 'error fetching data '+error.message }))
        }

    render(){
        return(
            <div className="panel norris">
                location, type if not applicable
                <input onChange={this.loadCity} type="text" ref="wea" value={this.state.city}></input>
                <div>
                {this.state.text}
                </div>
            </div>
        )
    }
}

export default Weather