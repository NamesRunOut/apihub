import React, { Component } from 'react';
import './style/nameday.css'
import refresh from './icons/refreshBlack.svg'

class Nameday extends React.Component{
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
          fetch(`https://api.abalin.net/today?country=pl`)
             .then(response => response.json())
             //.then(response => console.log(response.data.namedays.pl))
             .then(data => this.setState({
                 text: data.data.namedays.pl
             }))
             .catch(error => this.setState({ text: 'error fetching data' }))
    }

    render(){
        return(
            <div className="panel nameday">
              <div className="placeholder">Polish Nameday Calendar<button type="text" className="refresh" onClick={this.updateText}><img src={refresh} className="refreshImage" /></button></div>
              <div>
                    {this.state.text}
              </div>
             </div>
            )
        }

}

export default Nameday
