import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Website extends Component {

  render(){
    return <h1>{'Hello, world!'}</h1>
  }

}

ReactDOM.render(<Website />, document.getElementById('root'));
