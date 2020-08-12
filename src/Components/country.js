import React, { Component } from 'react';

class Country extends React.Component{

    constructor(){
        super();
        this.state = {
            text: "",
            country: ""
        }
        this.initialLoadCountry = this.initialLoadCountry.bind(this);
        this.loadCountry = this.loadCountry.bind(this);
        this.loadCountryv2 = this.loadCountryv2.bind(this);
    }

    componentDidMount() {
           window.addEventListener('load', this.initialLoadCountry);
    }

    initialLoadCountry() {
     fetch('https://cors-anywhere.herokuapp.com/gd.geobytes.com/GetCityDetails')
        .then(response => response.json())
        .then(data => {this.setState({
                         country: data.geobytescountry
                     }); return data})
        .then(data => this.loadCountry(data.geobytescountry))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    loadCountry(value){
        fetch(`https://restcountries.eu/rest/v2/name/${value}`)
         .then(response => response.json())
         .then(data => this.setState({
                 country: data[0].name,
             }))
         .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    loadCountryv2(){
    const value = this.refs.con.value;
            fetch(`https://restcountries.eu/rest/v2/name/${value}`)
             .then(response => response.json())
             .then(data => this.setState({
                     country: data[0].name,
                 }))
             .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    assignValue(i){
             document.getElementById("con").value=i;
    }

    removeValue(){
            document.getElementById("con").value="";
    }

    render(){
        return(
            <div className="panel weather">
                country info
                <input onChange={this.loadCountryv2} type="text" ref="con" id="con" onClick={this.removeValue}></input>
                <div>
                {this.state.country}
                </div>
            </div>
        )
    }
}

export default Country