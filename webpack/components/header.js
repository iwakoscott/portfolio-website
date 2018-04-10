import React, { Component } from 'react';

class Header extends Component {

  render(){
    return (
      <div>
        <div className="container text-center slide sliding-card main">
          <div className="row">
            <div className="col-12">
              <h1 id="my-name">{this.props.name}</h1>
              <hr/>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-sm-2">
              <i className="fa fa-map-pin fa-4x fall mb-2"></i>
            </div>
            <div className="col-sm-5">
              <h5>{"Davis, CA USA"}</h5>
            </div>
            <div className="col-sm-5">
              <h5>{"38.5449"}&deg; {" N, "} {"121.7405"}&deg; {"W"}</h5>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-sm-2">
              <i className="fa fa-id-badge fa-4x mb-2"></i>
            </div>
            <div className="col-sm-4 offset-sm-3">
              <h5>{"Front-end Developer at Foodnome"}</h5>
            </div>
          </div>
        </div>
        <div className="container slide mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-8 offset-md-2 sliding-card">
              <img id="profile-img" className="img-thumbnail mx-auto d-block"
                   src={"/assets/images/goldengate.jpg"}
                   alt="me in central park"/>
            </div>
          </div>
        </div>
      </div>

    );
  } // Header.render

} // Header

export default Header;
