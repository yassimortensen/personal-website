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
          <a href="https://youtu.be/xQ-ZFvrMRQY">
            <img id='accountable' alt="" src={accountable} style={{width:'50%'}}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
          </a>
          <p>A personal goal setting tool that uses analytics to track your progress</p>
          <p>Built API and schema using Ruby on Rails and ActiveRecord Serializer</p>
          <p>Integrated ChartJS for data analytic rendering of relevant charts</p>
          <p>Implemented Javascript React and Redux Libraries for a dynamic user experience</p>
          <p>Customized CSS for unique app styling</p>
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Blush</h5>
          <a href="https://youtu.be/B_8TMYuMpu4">
            <img id='blush' alt="" src={blush} style={{width:'50%'}}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
          </a>
          <p>An image discovery and bookmarking site built in React and inspired by Pinterest</p>
          <p>Designed API and data rendering from scratch using Ruby on Rails and the MVC pattern</p>
          <p>Seeded database with 1,400 pictures from third-party API Unsplash </p>
          <p>Applied paginated API requests and LazyLoad React library for responsive and timely image loading</p>
          <p>Implemented CSS masonry grid layout styling to display organized content on each page load</p>
        </div><br/>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Cuddlegram</h5>
          <a href="https://youtu.be/NdiGr94h7Wk">
            <img id='cuddlegram' alt="" src={cuddlegram} style={{width:'50%'}}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
          </a>
          <p>A social media site for finding adorable pet instagram accounts to follow and enjoy</p>
          <p>Applied MVC pattern and Ruby on Rails techniques for app architecture and user flow</p>
          <p>Utilized Git branches and pull requests to maintain a distributed workflow amongst a 2-member team</p>
          <p>Implemented NokoGiri for website scraping and database seeding</p>
          <p>Integrated Bootstrap and custom CSS for a responsive user experience</p>
        </div>
        <div style={{display: 'inline-block', width: '50%'}}>
          <h5>Game of DeThrones</h5>
          <a href="https://youtu.be/0tVM2GQPXJc">
            <img id='gameOfDeThrones' alt="" src={gameOfDeThrones} style={{width:'50%'}}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            />
          </a>
          <p>A Game of Thrones parody game where the user can choose their own adventure</p>
          <p>Applied Javascript techniques for single-page user interface and progress through their individual story</p>
          <p>Utilized Git branches and pull requests to maintain a distributed workflow amongst a 3-member team</p>
          <p>Implemented NokoGiri for website scraping and database seeding</p>
          <p>Integrated Bootstrap and CSS animations for a responsive user experience</p>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
