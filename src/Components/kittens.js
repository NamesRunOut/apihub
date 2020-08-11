import React, { Component } from 'react';

class Kitten extends React.Component{
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
     fetch(`https://placekitten.com/150/150`)
    }

    render(){
        return(
            <div class="panel kitten">
                placeholder kitten
                <img src=`https://placekitten.com/150/150` />
            </div>
        )
    }
}

export default Kitten