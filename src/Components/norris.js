import React, { Component } from 'react';
import refresh from './icons/refreshGrey.svg'
import './style/norris.css'

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
                <div className="norrisTitle"><h2 className="namedayTitle">Chuck Norris API</h2>
                <button onClick={this.updateText} className="refresh"><img src={refresh} className="refreshImage" /></button></div>
                <div>
                {this.state.text}
                </div>
            </div>
        )
    }
}

export default Norris