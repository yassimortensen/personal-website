import React, { Component } from 'react';
import '../App.css';
import typingImage from './domenico-loia-310197.jpg'

class Intro extends Component {
  render() {
    return (
      <div style={{fontFamily:'Roboto Slab'}}>
        <p style={{display:'inline-block', fontSize:'2em'}}>code with</p>
        <p style={{fontFamily:'Dancing Script', fontSize:'5em', display:'inline-block', paddingLeft: '1%'}}>yassi</p>
        <img alt="" src={typingImage} style={{width: "100%"}} />
        <p style={{fontSize:'4em'}}>Hello!</p>
        <p style={{fontSize:'1.5em'}}>{`I'm Yassi - a full-stack web developer.`}</p>
        <p style={{fontSize:'1.5em'}}>With every line of code, I strive to make the web a beautiful place.</p>
        <p style={{fontSize:'1.5em'}}>Learn more about what I do</p>
        <i className="fas fa-chevron-down fa-2x"></i>
      </div>
    );
  }
}

export default Intro;
