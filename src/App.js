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

import Github from './Components/icons/githubBlue.png'
import Twitter from './Components/icons/twitterBlue.png'
import Gmail from './Components/icons/gmailBlue.png'

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
            <div className="contactBar"><a  href="https://github.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={Github} alt="GitHub" /></a>
          <a href="https://twitter.com/NamesRunOut" target="_blank" rel="noopener noreferrer"><img className="contactImage" src={Twitter} alt="Twitter" /></a>
        <a href="mailto: namesrunout@gmail.com" target="_blank" rel="noopener noreferrer"><img  className="contactImage" src={Gmail} alt="" /></a></div>
        </div>
      );
    }
}


export default App;
