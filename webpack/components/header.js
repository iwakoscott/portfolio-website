import React, { Component } from 'react';

class Header extends Component {

  render(){
    return (
      <div className="jumbotron jumbotron-fluid text-center slide">
        <h1 className="bounce">{this.props.name}</h1>
      </div>
    );
  } // Header.render

} // Header

export default Header;
