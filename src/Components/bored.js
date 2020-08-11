import React, { Component } from 'react';

class Bored extends React.Component{
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
          fetch(`https://www.boredapi.com/api/activity`)
          .then(response => response.json())
           .then(data => this.setState({
               text: data.activity
           }))
           .catch(error => this.setState({ text: 'error fetching data' }))
    }

    render(){
        return(
            <div class="panel bored">
                bored api
                <button onClick={this.updateText} type="text">Refresh</button>
                <div>
                    {this.state.text}
                </div>
             </div>
            )
        }

}

export default Bored