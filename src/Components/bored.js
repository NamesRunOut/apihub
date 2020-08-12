import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import './style/bored.css'

 const marksAccess = [
      {
        value: 0,
        label: 'easy',
      },
      {
        value: 1,
        label: 'hard',
      },
    ];

    const marksParticipants = [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5'
      }
    ];

    const marksPrice = [
      {
        value: 0,
        label: 'free',
      },
      {
        value: 1,
        label: 'expensive',
      }
    ];

class Bored extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "",
            returnAcc: "",
            returnTyp: "",
            returnPar: "",
            returnPri: "",
            accessibility: 0,
            type: "",
            participants: 1,
            price: 0
        }
        this.updateText = this.updateText.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    componentDidMount() {
            window.addEventListener('load', this.updateText);
    }


    handleChange1 = (event, value) => {
        //console.log(value)
        this.setState({
            accessibility: value
        });
      //  this.updateText();
    }

    handleChange2 = (event, value) => {
        //console.log(value)
        this.setState({
            participants: value
        });
     //   this.updateText();
    }

    handleChange3 = (event, value) => {
        //console.log(value)
        this.setState({
            price: value
        });
     //   this.updateText();
    }

    handleCategory(value){
        this.setState({
            type: value
        });
    }

    updateText() {
          fetch(`http://www.boredapi.com/api/activity?maxprice=${this.state.price}&participants=${this.state.participants}&maxaccessibility=${this.state.accessibility}&type=${this.state.type}`)
          .then(response => response.json())
           .then(data => this.setState({
               text: data.activity,
               returnAcc: data.accessibility,
               returnTyp: data.type,
               returnPar: data.participants,
               returnPri: data.price,
           }))
           .catch(error => this.setState({ text: 'error fetching data' }))
    }

    render(){
        return(
            <div class="panel bored">
                bored api
                <button onClick={this.updateText} type="text">Refresh</button>
                <div>
                    activity: {this.state.text}<br />
                    accessibility: {this.state.returnAcc}<br />
                    type: {this.state.returnTyp}<br />
                    participants: {this.state.returnPar}<br />
                    price: {this.state.returnPri}<br />
                </div>
             <Slider
                     onChange={this.handleChange1}
                     //valueLabelDisplay="auto"
                     aria-labelledby="continuous-slider"
                     step={0.01}
                     min={0}
                     max={1}
                     marks={marksAccess}
              /> max accessibility 1-hardest 0-easiest: {this.state.accessibility}
              <Slider
                onChange={this.handleChange2}
                aria-labelledby="continuous-slider"
                step={1}
                min={1}
                max={5}
                marks={marksParticipants}
              /> no participants: {this.state.participants}
              <Slider
                onChange={this.handleChange3}
                aria-labelledby="continuous-slider"
                step={0.01}
                min={0}
                max={1}
                marks={marksPrice}
              /> max price 0-cheap 1-expensive: {this.state.price}
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                <button onClick={() => this.handleCategory("education")}>education</button>
                <button onClick={() => this.handleCategory("recreational")}>recreational</button>
                <button onClick={() => this.handleCategory("social")}>social</button>
                <button onClick={() => this.handleCategory("diy")}>diy</button>
                <button onClick={() => this.handleCategory("charity")}>charity</button>
                <button onClick={() => this.handleCategory("cooking")}>cooking</button>
                <button onClick={() => this.handleCategory("relaxation")}>relaxation</button>
                <button onClick={() => this.handleCategory("music")}>music</button>
                <button onClick={() => this.handleCategory("busywork")}>busywork</button>
                </div>
              </div>
             </div>
            )
        }

}

export default Bored