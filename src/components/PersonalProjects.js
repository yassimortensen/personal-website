import React, { Component } from 'react';
import '../App.css';
import AccountableGif from './AccountableGIF.gif';
import AccountableStill from './AccountableStill.png';
import BlushGif from './BlushGIF.gif';
import BlushStill from './BlushStill.png'
import gameOfDeThronesGif from './GOTGif.gif';
import gameOfDeThronesStill from './GOTStill.png';
import cuddlegramGif from './CuddlegramGIF(2).gif';
import cuddlegramStill from './CuddlegramStill.png'

class PersonalProjects extends Component {

  constructor(){
    super();

    this.state = {
      accountable: false,
      blush: false,
      gameOfDeThrones: false,
      cuddlegram: false
    }
  }

  handleMouseOver = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: true
    })
  }

  handleMouseOut = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: false
    })
  }

  render() {

    let accountable;
    let blush;
    let gameOfDeThrones;
    let cuddlegram;

    if (this.state.accountable === true){
      accountable = AccountableGif
    } else {
      accountable = AccountableStill
    }

    if (this.state.blush === true){
      blush = BlushGif
    } else {
      blush = BlushStill
    }

    if (this.state.gameOfDeThrones === true){
      gameOfDeThrones = gameOfDeThronesGif
    } else {
      gameOfDeThrones = gameOfDeThronesStill
    }

    if (this.state.cuddlegram === true){
      cuddlegram = cuddlegramGif
    } else {
      cuddlegram = cuddlegramStill
    }

    return (
      <div>
        <h2>Personal Projects</h2>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Accountable</h5>
          <img id='accountable' alt="" src={accountable} style={{width:'50%'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Blush</h5>
          <img id='blush' alt="" src={blush} style={{width:'50%'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </div><br/>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Cuddlegram</h5>
          <img id='cuddlegram' alt="" src={cuddlegram} style={{width:'50%'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Game of DeThrones</h5>
          <img id='gameOfDeThrones' alt="" src={gameOfDeThrones} style={{width:'50%'}}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
