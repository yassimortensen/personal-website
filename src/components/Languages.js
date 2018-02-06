import React, { Component } from 'react';
import '../App.css';

class Languages extends Component {

  constructor(){
    super()

    this.state = {
      expand: false
    }
  }

  handleExpand = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      return {expand: !prevState.expand}
    })
  }

  render() {
    let info;

    if (this.state.expand === true){
      info = (
        <div>
          <div style={{display:'inline-block', width:'30%'}}>
            <p>Rails info</p>
          </div>
          <div style={{display:'inline-block', width:'30%'}}>
            <p>JS info</p>
          </div>
          <div style={{display:'inline-block', width:'30%'}}>
            <p>HTML & CSS info</p>
          </div><br/>
          <i className="fas fa-chevron-up fa-2x" onClick={this.handleExpand}></i>
        </div>
      )
    } else {
      info = <i className="fas fa-chevron-down fa-2x" onClick={this.handleExpand}></i>
    }

    return (
      <div style={{backgroundColor: '#f5e3e7'}}>
        <div id='Rails' style={{display:'inline-block', width:'30%'}}>
          <h4>backend</h4>
          <i className="far fa-gem fa-3x"></i><br/>
          <h4>Ruby on Rails</h4>
        </div>
        <div id='JS' style={{display:'inline-block', width:'30%'}}>
          <h4>frontend</h4>
          <i className="fab fa-react fa-3x"></i><br/>
          <h4>Javascript with React and Redux</h4>
        </div>
        <div id='CSS' style={{display:'inline-block', width:'30%'}}>
        <h4>styling</h4>
        <i className="fas fa-code fa-3x"></i><br/>
        <h4>HTML with Custom CSS</h4>
        </div><br/>
        {info}
      </div>
    );
  }
}

export default Languages;
