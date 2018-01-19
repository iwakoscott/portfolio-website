import React, { Component } from 'react';

class Header extends Component {

  render(){
    return (
      <div className="container text-center slide">
        <div className="row">

          <div className="col-10 offset-1 sliding-card bounce">
            <h1 id="my-name">{this.props.name}</h1>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row"><i className="fa fa-map-marker fa-3x fa-fw"></i></th>
                  <td>{"Davis, CA"}</td>
                  <td>{"38.5449° N, 121.7405° W"}</td>
                </tr>
                <tr>
                  <th scope="row"><i className="fa fa-id-badge fa-3x fa-fw"></i></th>
                  <td colSpan="2">{"Web Development Intern at the CCCD"}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <div className="row">

          <div className="col-10 offset-1 sliding-card bounce">
            <img className="img-thumbnail" src="assets/images/snow.jpg" alt="me in central park"/>
          </div>

        </div>
      </div>
    );
  } // Header.render

} // Header

export default Header;
