import React, { Component } from 'react';
import './style/card.css'

class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "",
            image: ""
        }
        this.updateText = this.updateText.bind(this);
    }

     componentDidMount() {
        window.addEventListener('load', this.updateText);
     }

    updateText() {
     fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then(response => response.json())
        .then(data => this.setState({
            text: data.cards[0].value+" of "+data.cards[0].suit,
            image: data.cards[0].image
        }))
        .catch(error => this.setState({ text: 'error fetching data' }))
    }

    render(){
        return(
            <div class="panel card">
                cards api
                <button onClick={this.updateText} type="text">Refresh</button>
                {this.state.text}
                <img src={this.state.image} alt={this.state.text} class="cardImage" />
            </div>
        )
    }
}

export default Card