import React, { Component } from 'react';
import '../App.css';

class Closing extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#B5DBB4', fontFamily:'Roboto Slab'}}>
        <p style={{padding: '2%', fontSize:'2em'}}>Want to work together?</p>
        <p style={{ fontSize:'1em'}}>{`I'm currently accepting new projects amd would love to hear about yours.`}</p>
        <p style={{paddingBottom: '2%', fontSize:'1em'}}>Please take a few minutes to tell me about it</p>
      </div>
    );
  }
}

export default Closing;
