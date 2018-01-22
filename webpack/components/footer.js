import React from 'react';

function Footer(props){
  return (
    <footer>
      <div className="container-fluid card-board text-center">
        <div className="row">
          <div className="col-sm-3">
            <h1 className="card-board-header">{"Connect w"}&#47; {"Me"}</h1>
          </div>
          <div className="col-sm-6">
          <ul className="list-inline">
            <li className="nav-item list-inline-item">
              <a className="nav-link" href="https://github.com/iwakoscott" target="_blank"><i className="fa fa-github-square fa-2x fa-fw"></i>  <span className="user-name">iwakoscott</span></a>
            </li>
            <li className="nav-item list-inline-item">
              <a className="nav-link" href="https://www.linkedin.com/in/iwakoscott/" target="_blank"><i className="fa fa-linkedin-square fa-2x fa-fw"></i>  <span className="user-name">iwakoscott</span></a>
            </li>
          </ul>
          </div>
          <div className="col-sm-3">
            <span>{"COPYRIGHT "} &copy; {" 2018 Satoshi Scott Iwako"} </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
