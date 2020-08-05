import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        text: "",
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

    render() {
      return (
        <div class="wrapper">
        <div>
          Henlo
          <input onChange={this.changeScript} type="text" ref="in1"></input>
        </div>
        <div id="response">
            {this.state.text}
        </div>
        </div>
      );
    }
}


export default App;
