import React, { Component } from 'react';
import './style/numbers.css'
import magnifier from './icons/magnifier.svg'

class Numbers extends React.Component{
    constructor(){
        super();
        this.state = {
            text: ""
        }
        this.updateText = this.updateText.bind(this);
    }

    updateText() {
            const value = this.refs.in1.value;
            fetch(`https://numbersapi.com/${value}?json`)
            .then(response => {
                if (response.ok) return response;
                else throw Error('error fetching data');
            })
            .then(response => response.json())
            .then(data => this.setState({
                text: data.text
            }))
            .catch(error => this.setState({ text: 'error fetching data '+error.message }))
     }

    render() {
        return (
            <div className="panel numbers">
                <h2>Numbers API</h2>
                 <h3>Fun number trivia</h3>
                 <div id="inputBar">
                   <input onChange={this.updateText} type="text" ref="in1" id="in1"></input>
                   <img src={magnifier} className="magnifier" />
                 </div>
                 <div id="response">
                    {this.state.text}
                  </div>
             </div>
        )
    }
}

export default Numbers
