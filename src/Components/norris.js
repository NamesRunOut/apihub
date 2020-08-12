import React, { Component } from 'react';

class Norris extends React.Component{
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
     fetch(`https://cors-anywhere.herokuapp.com/http://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => this.setState({
            text: data.value
        }))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    render(){
        return(
            <div className="panel norris">
                chuck norris api
                <button onClick={this.updateText} type="text">Refresh</button>
                <div>
                {this.state.text}
                </div>
            </div>
        )
    }
}

export default Norris