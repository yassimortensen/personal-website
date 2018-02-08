import React, { Component } from 'react';
import '../App.css';
import typingImage from './domenico-loia-310197.jpg'
import profileImage from './profile-image.JPG'

class Intro extends Component {
  render() {
    return (
      <div style={{fontFamily:'Roboto Slab', paddingBottom:'1%'}}>
        <h1 className="code">code with</h1>
        <h1 className="name">yassi</h1>
        <img alt="" src={typingImage} style={{width: "100vw", display:'inline-block'}} />
        <a className="icon" href="https://www.linkedin.com/in/yassimortensen/">
          <i className="fab fa-linkedin fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a className="icon" href="https://docs.google.com/presentation/d/1PqcB0LwDTbAtC4G-sAPRG8EJq7Zag_SToaOVDNSMugQ/edit?usp=sharing">
          <i className="far fa-file-alt fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <img alt="" src={profileImage} className="img-circle" style={{display:'inline-block'}}/>
        <a className="icon" href="https://github.com/yassimortensen">
          <i className="fab fa-github-square fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a className="icon" href="https://medium.com/@yassimortensen">
          <i className="fab fa-medium-m fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <div style={{margin:'0', padding:'0'}}>
          <h1 className="hello">Hello!</h1>
          <p className="intro">{`I'm Yassi - a full-stack web developer.`}</p>
          <p className="intro">With every line of code, I strive to make the web a beautiful place.</p>
          <p className="intro">Learn more about what I do</p>
        </div>
      </div>
    );
  }
}

export default Intro;
