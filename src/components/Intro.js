import React, { Component } from 'react';
import '../App.css';
import typingImage from './domenico-loia-310197.jpg'

class Intro extends Component {
  render() {
    return (
      <div>
        <h1>code with yassi</h1>
        <img alt="" src={typingImage} style={{width: "100%"}} />
        <h1>Hello!</h1>
        <h4>{`I'm Yassi - a full-stack web developer.`}</h4>
        <h4>With every line of code, I strive to make the web a beautiful place.</h4>
        <h4>Learn more about what I do</h4>
        <i className="fas fa-chevron-down"></i>
      </div>
    );
  }
}

export default Intro;
