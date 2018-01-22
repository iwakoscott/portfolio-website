import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import CardBoard from './components/card-board.js';

class Website extends Component {

  constructor(){
    super();
    this.state = {
      projectData: null
    }
  } // Website.constructor

  componentDidMount(){

  } // Website.componentDidMount

  render(){
    return (
      <div>
        <Header
          name="Satoshi Iwako"
          quote=""
          whoAmI="I am a Jr. Frontend Developer and Espresso Enthusiast."/>

        <CardBoard
          faClass="fa fa-clock-o"
          title="My Past"
          content={`I graduated from the University of California, Davis with a
                    Bachelors of Science in Applied Mathematics in the Fall of 2016. Upon graduation,
                    I took a Fullstack Web Development Nanodegree on Udacity where I found
                    my passion for Web Development. I fell in love with Web Development so much
                    that I completed the program in just 2 months (on average, it takes 6 months to complete.)
                    `}
        />

        <CardBoard
          faClass="fa fa-compass"
          title="Where am I going?"
          content="I am learning all there is to Frontend Web Development and working my way to find my first developer position at a prominent tech company."
        />
        <CardBoard
          faClass="fa fa-wrench"
          title="What am I working on?"
          content={`I am currently a Web Development Intern at the California Center for Cooperative Development
                   where I am building a dynamic website for Jujube farmers. I am learning the WordPress CMS
                   architecture, PHP, CSS Grid Layout, and Jekyll (A static website generator.) I am also working
                   on building my first ever blog about espressos I try around the world.`}
        />
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(<Website />, document.getElementById('root'));
