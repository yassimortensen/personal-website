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
          <div className="language-grid">
              <ul>
                <li>Ruby</li>
                <li>Rails</li>
                <li>ActiveRecord</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>JSON</li>
                <li>Git</li>
                <li>Nokogiri</li>
              </ul>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Chart.js</li>
                <li>LazyLoad</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Custom CSS</li>
                <li>Masonry Layout</li>
                <li>CSS Grid</li>
              </ul>
          </div>
        <i id="arrowDown" className="fas fa-chevron-up fa-2x language-icon" onClick={this.handleExpand}></i>
        </div>
      )
    } else {
      info = <i id="arrowUp" className="fas fa-chevron-down fa-2x language-icon" onClick={this.handleExpand}></i>
    }

    return (
      <div style={{backgroundColor: '#f5e3e7', padding:'1%', verticalAlign:'top'}}>
        <div className="language-grid">
          <div className='language'>
            <p className="language-text">backend</p>
            <i className="far fa-gem fa-3x language-icon"></i><br/>
            <p className="language-text">Ruby on Rails</p>
          </div>
          <div className='language'>
            <p className="language-text">frontend</p>
            <div className="javascript-icons">
              <div></div>
              <i className="fab fa-js-square fa-3x language-icon" style={{padding:'1%'}}></i>
              <i className="fab fa-react fa-3x language-icon" style={{padding:'1%'}}></i><br/>
              <div></div>
            </div>
            <p className="language-text">Javascript with <br/> React and Redux</p>
          </div>
          <div className='language'>
            <p className="language-text">styling</p>
            <i className="fas fa-code fa-3x language-icon"></i><br/>
            <p className="language-text">HTML with <br/> Custom CSS</p>
          </div>
        </div>
        {info}
      </div>
    );
  }
}

export default Languages;
