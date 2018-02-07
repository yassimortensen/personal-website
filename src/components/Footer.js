import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a className="icon" href="https://www.linkedin.com/in/yassimortensen/">
          <i className="fab fa-linkedin fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a className="icon" href="mailto:yassimortensen@gmail.com">
          <i className="far fa-envelope fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a className="icon" href="https://github.com/yassimortensen">
          <i className="fab fa-github-square fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a className="icon" href="https://medium.com/@yassimortensen">
          <i className="fab fa-medium-m fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <p className="masthead">Handmade by me <i className="far fa-copyright"></i> 2018</p>
      </div>
    );
  }
}

export default Footer;
