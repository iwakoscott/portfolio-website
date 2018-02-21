import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import CardBoard from './components/card-board.js';
import Footer from './components/footer.js';
import Projects from './components/projects.js';

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
          whoAmI="I am a Jr. Front-end Developer and Espresso Enthusiast."/>

        <CardBoard
          idLabel="my-past"
          faClass="fa fa-clock-o"
          backgroundColor="#e74c3c"
          title="My Past"
          content={`I graduated from the University of California, Davis with a
                    Bachelors of Science in Applied Mathematics in the Fall of 2016. Upon graduation,
                    I took a Full Stack Web Development Nanodegree on Udacity where I found
                    my passion for Web Development. I fell in love with Web Development so much
                    that I completed the program in just 2 months (on average, it takes 6 months to complete.)
                    I wanted to keep learning so I have been learning what I can on FreeCodeCamp and Udemy. Here are some of my projects: `}
        />

        <Projects />

        <CardBoard
          idLabel="where-im-going"
          faClass="fa fa-compass"
          backgroundColor="#414d0b"
          title="Where am I going?"
          content={`I am learning all there is to Front-end Web Development and
                   working my way to find my first Developer position at a
                   prominent tech company. From there, I hope to delve into more
                   Back-end Development and reach my ultimate goal : working as a
                   Full Stack Engineer.`}
        />
        <CardBoard
          idLabel="what-im-working-on"
          faClass="fa fa-wrench"
          title="What am I working on?"
          backgroundColor="#3498db"
          content={`I am currently a Web Development Intern at the California Center for Cooperative Development
                   where I am building a dynamic website for Jujube farmers. I am learning the WordPress CMS
                   architecture, PHP, and the CSS Grid Layout. I am also working on building a Content Management Website
                   for the Knights Landing One Health Clinic which is set to be deployed by the end of March 2018.`}
        />
        <Footer />
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(<Website />, document.getElementById('root'));
