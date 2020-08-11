import React, { Component } from 'react';
import './App.css';
import Norris from './Components/norris.js'
import Nameday from './Components/nameday.js'
import Numbers from './Components/numbers.js'
import Bored from './Components/bored.js'
import Card from './Components/card.js'
import Weather from './Components/weather.js'

class App extends Component {
    constructor(){
        super();
        this.state = {
           text: "",
           norris: "",
           bored: "",
           nameday: "",
           error: "error"
        }
    }

   render() {
      return (
        <div>
            <Nameday />
            <Bored />
            <Numbers />
            <Norris />
            <Card />
            <Weather />
        </div>
      );
    }
}


export default App;
