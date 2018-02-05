import React, { Component } from 'react';
import '../App.css';

class Languages extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#f5e3e7'}}>
        <div id='Rails' style={{display:'inline-block', width:'30%'}}>
          <h4>backend</h4>
          <i className="far fa-gem"></i><br/>
          <h4>Ruby on Rails</h4>
        </div>
        <div id='JS' style={{display:'inline-block', width:'30%'}}>
          <h4>frontend</h4>
          <i className="fab fa-react"></i><br/>
          <h4>Javascript with React and Redux</h4>
        </div>
        <div id='CSS' style={{display:'inline-block', width:'30%'}}>
        <h4>styling</h4>
        <i className="fas fa-code"></i><br/>
        <h4>HTML with Custom CSS</h4>
        </div>
        <i className="fas fa-chevron-down"></i>
      </div>
    );
  }
}

export default Languages;
