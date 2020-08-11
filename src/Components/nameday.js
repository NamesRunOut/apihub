import React, { Component } from 'react';

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
            <div class="panel nameday">
                nameday api
                <button onClick={this.updateText} type="text">Refresh</button>
                <div>
                    {this.state.text}
                </div>
             </div>
            )
        }

}

export default Nameday