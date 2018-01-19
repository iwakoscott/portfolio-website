import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';

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
        {/* <Cards projectData={this.state.projectData}/> */}
      </div>
    );
  } // Website.render

} // Website

ReactDOM.render(<Website />, document.getElementById('root'));
