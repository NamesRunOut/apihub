import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        text: "",
        norris: "",
        bored: "",
        nameday: "",
        error: "error"
      }

    changeScript = () => {
        const value = this.refs.in1.value;
        fetch(`http://numbersapi.com/${value}?json`)
        .then(response => {
            if (response.ok) return response;
            else throw Error('error fetching data');
        })
        .then(response => response.json())
        .then(data => this.setState({
            text: data.text
        }))
        .catch(error => this.setState({ text: 'error fetching data' }))
    }

        changeScriptNorris = () => {
        fetch(`http://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => this.setState({
            norris: data.value
        }))
        .catch(error => this.setState({ text: 'error fetching data' }))
        }

                changeScriptBored = () => {
                fetch(`https://www.boredapi.com/api/activity`)
                .then(response => response.json())
                .then(data => this.setState({
                    bored: data.activity
                }))
                .catch(error => this.setState({ text: 'error fetching data' }))
                }

            changeScriptNameday = () => {
                fetch(`https://api.abalin.net/today?country=pl`)
                .then(response => response.json())
                .then(data => this.setState({
                    nameday: data.pl
                }))
                .catch(error => this.setState({ text: 'error fetching data' }))
                }

    render() {
      return (
        <div class="wrapper">
          <div class="api-numbers">
               numbers api
               <input onChange={this.changeScript} type="text" ref="in1"></input>
               <div>
                 {this.state.text}
                </div>
          </div>

          <div class="api-norris">
              chuck norris api
              <input onChange={this.changeScriptNorris} type="text"></input>
               <div>
                 {this.state.norris}
              </div>
           </div>

           <div class="api-bored">
            bored api
                  <input onChange={this.changeScriptBored} type="text"></input>
                  <div>
                 {this.state.bored}
               </div>
           </div>

<div class="api-nameday">
            nameday api
                  <input onChange={this.changeScriptNameday} type="text"></input>
                  <div>
                 {this.state.bored}
               </div>
           </div>
        </div>
      );
    }
}


export default App;
