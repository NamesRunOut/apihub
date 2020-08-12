import React, { Component } from 'react';

class Ip extends React.Component{

    constructor(){
        super();
        this.state = {
            ip: ""
        }
        this.updateIp = this.updateIp.bind(this);
    }

    componentDidMount() {
           window.addEventListener('load', this.updateIp);
    }

    updateIp() {
     fetch('https://api.ipify.org?format=json')
        //.then(response => response.json())
        .then(data => this.setState({
                         ip: data.ip
                     }))
        .catch(error => this.setState({ text: 'error fetching data '+error.message }))
    }

    render(){
        return(
            <div className="panel ip">
                ip
                <div>
                {this.state.ip}
                value may not be displayed if you're using an adblocker
                </div>
            </div>
        )
    }
}

export default Ip