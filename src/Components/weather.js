import React, { Component } from 'react';

class Weather extends React.Component{
    constructor(){
        super();
        this.state = {
            text: ""
        }
        this.updateText = this.updateText.bind(this);
    }

    componentDidMount() {
            window.addEventListener('load', this.updateText);
    }

    updateText() {
     fetch(`https://cors-anywhere.herokuapp.com/gd.geobytes.com/GetCityDetails`)
        .then(response => response.json())
        .then(data => console.log(data.geobytescity))
        .then(data => this.setState({
            text: data.geobytescity
        }))
        .catch(error => this.setState({ text: 'error fetching data' }))
    }

    render(){
        return(
            <div class="panel norris">
                location
                <button onClick={this.updateText} type="text">Refresh</button>
                <div>
                {this.state.text}
                </div>
            </div>
        )
    }
}

export default Weather