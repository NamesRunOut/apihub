import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

       const CustSlider = withStyles({
          root: {
            color: '#574b90',
            height: 8,
          },
          thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#574b90',
            border: '2px solid black',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
              boxShadow: 'inherit',
            },
          },
          active: {},
          valueLabel: {
          },
          track: {
            height: 8,
            borderRadius: 12,
          },
          rail: {
            height: 8,
            borderRadius: 12,
          },
        })(Slider);

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
            <div className="panel bored">
                <div className="header"><h1>Activity API</h1></div>
                <div className="main">
                <div>
                    <h2>{this.state.text}</h2><br />
                   <p> accessibility: {this.state.returnAcc}<br />
                    type: {this.state.returnTyp}<br />
                    participants: {this.state.returnPar}<br />
                    price: {this.state.returnPri}<br /></p>
                </div>
                <div className="right">
             <Slider
                     className="slider"
                     onChange={this.handleChange1}
                     //valueLabelDisplay="auto"
                     aria-labelledby="continuous-slider"
                     step={0.01}
                     min={0}
                     max={1}
                     marks={marksAccess}
              />
              <Slider
                className="slider"
                onChange={this.handleChange2}
                aria-labelledby="continuous-slider"
                step={1}
                min={1}
                max={5}
                marks={marksParticipants}
              />
              <Slider
                className="slider"
                onChange={this.handleChange3}
                aria-labelledby="continuous-slider"
                step={0.01}
                min={0}
                max={1}
                marks={marksPrice}
              />
              <button onClick={this.updateText} type="text" id="regen">REGENERATE</button>
              </div>
              </div>
              <div className="buttons">
                <button onClick={() => this.handleCategory("education")}>EDUCATION</button>
                <button onClick={() => this.handleCategory("recreational")}>RECREATIONAL</button>
                <button onClick={() => this.handleCategory("social")}>SOCIAL</button>
                <button onClick={() => this.handleCategory("diy")}>DIY</button>
                <button onClick={() => this.handleCategory("charity")}>CHARITY</button>
                <button onClick={() => this.handleCategory("cooking")}>COOKING</button>
                <button onClick={() => this.handleCategory("relaxation")}>RELAXATION</button>
                <button onClick={() => this.handleCategory("music")}>MUSIC</button>
                <button onClick={() => this.handleCategory("busywork")}>BUSYWORK</button>
              </div>
             </div>
            )
        }

}

export default Bored