import React, { Component } from 'react';

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
            fetch(`http://numbersapi.com/${value}?json`)
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
                 numbers api
                 <input onChange={this.updateText} type="text" ref="in1"></input>
                 <div>
                    {this.state.text}
                  </div>
             </div>
        )
    }
}

export default Numbers