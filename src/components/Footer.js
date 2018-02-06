import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div style={{fontFamily:'Roboto Slab', padding:'1%'}}>
        <a href="https://www.linkedin.com/in/yassimortensen/" style={{color:'black'}}>
          <i className="fab fa-linkedin fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a href="mailto:yassimortensen@gmail.com" style={{color:'black'}}>
          <i className="far fa-envelope fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a href="https://github.com/yassimortensen" style={{color:'black'}}>
          <i className="fab fa-github-square fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <a href="https://medium.com/@yassimortensen" style={{color:'black'}}>
          <i className="fab fa-medium-m fa-2x" style={{display:'inline-block', width:'10%'}}></i>
        </a>
        <p style={{padding:'1%'}}>Handmade by me <i className="far fa-copyright"></i> 2018</p>
      </div>
    );
  }
}

export default Footer;
