import React, { Component } from 'react';
import '../css/main.css'
import magnifier from './icons/magnifier.svg'

class Country extends React.Component{

    constructor(){
        super();
        this.state = {
            text: "",
            country: "",
            capital: "",
            region: "",
            population: "",
            currency: ""
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
                     }); document.getElementById("con").value=data.geobytescountry; return data})
        .then(data => this.loadCountry(data.geobytescountry))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    loadCountry(value){
        fetch(`https://restcountries.eu/rest/v2/name/${value}`)
         .then(response => response.json())
         .then(data => this.setState({
                 country: data[0].name,
                 capital: data[0].capital,
                 region: data[0].region,
                 population: data[0].population,
                 currency: data[0].currencies[0].code
             }))
         .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    loadCountryv2(){
    const value = this.refs.con.value;
            fetch(`https://restcountries.eu/rest/v2/name/${value}`)
             .then(response => response.json())
             .then(data => this.setState({
                    country: data[0].name,
                    capital: data[0].capital,
                    region: data[0].region,
                    population: data[0].population,
                    currency: data[0].currencies[0].code
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
            <div className="panel country">
                <h2>Country Info</h2>
                <h3>Find out more about a country of your choosing</h3>
                <div id="inputBar">
                                   <input onChange={this.loadCountryv2} type="text" ref="con" id="con" onClick={this.removeValue}></input>
                                   <img src={magnifier} className="magnifier" />
                 </div>
                <div>
                <h2>{this.state.country}, {this.state.region}</h2>
                <div id="info">
                <p>Capital: {this.state.capital}</p>
                <p>Population: {this.state.population}</p>
                <p>Currency: {this.state.currency}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Country
