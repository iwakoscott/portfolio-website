import React from 'react';

function Footer(props){
  return (
    <footer>
      <div className="container-fluid card-board text-center">
        <div className="row">
          <div className="col-sm-4">

          {/* Button trigger modal*/}
          <button id="contact-me-button" type="button" className="btn btn-danger btn-lg mb-3" data-toggle="modal" data-target="#formspree">
          {"Contact Me"}
          </button>

          {/* Modal */}
          <div className="modal fade" id="formspree" tabIndex="-1" role="dialog" aria-labelledby="formspreeTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="formspreeModalLongTitle">Contact Me</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="https://formspree.io/iwakoscott@gmail.com" method="POST">
                  <input className="form-control" type="text" name="name" placeholder="name"/>
                  <input className="form-control" type="email" name="_replyto" placeholder="email" />
                  <textarea className="form-control" name="message" rows="3" placeholder="your message"></textarea>
                  <button className="btn btn-danger btn-lg mt-3 send-button" type="submit"> <i className="fa fa-paper-plane fa-1x"></i> {"Send"}</button>
                </form>
              </div>
            </div>
          </div>
          </div>

          </div>
          <div className="col-sm-5">
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
