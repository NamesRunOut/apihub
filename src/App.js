import React, { Component } from 'react';

import './App.css';
import Norris from './Components/norris.js'
import Nameday from './Components/nameday.js'
import Numbers from './Components/numbers.js'
import Bored from './Components/bored.js'
import Card from './Components/card.js'
import Weather from './Components/weather.js'
import Country from './Components/country.js'
import Ip from './Components/ip.js'

class App extends Component {
    constructor(){
        super();
        this.state = {
           text: "",
        }
    }

   render() {
      return (
        <div className="container">
        <div className="leftMain">
            <div>
                <Weather />
                <Nameday />
            </div>
            <div>
                <Bored />
            </div>
            <div>
                <Country />
                <Numbers />
            </div>
            </div>
            <div className="rightMain">
                <Ip />
                <Card />
                <Norris />
            </div>
        </div>
      );
    }
}


export default App;
