import React, { Component } from 'react';

class Footer extends Component {

  constructor(props){
    super();
    this.state = {
      openEnvelope: false
    }

    this.toggleButton = this.toggleButton.bind(this);
  } // constructor

  toggleButton(){
      let openEnvelope = !this.state.openEnvelope;
      this.setState({ openEnvelope });
  } // Footer.buttonClicked

  render(){
    return (
      <footer>
        <div className="container-fluid card-board text-center">
          <div className="row">
            <div className="col-sm-5 col-md-4">

            {/* Button trigger modal*/}

            <button id="contact-me-button" type="button" className="btn btn-primary btn-lg mb-3" data-toggle="modal" data-target="#formspree" onClick={() => {this.toggleButton()}}>
            <i className={this.state.openEnvelope ? 'fa fa-envelope-open fa-2x' : 'fa fa-envelope fa-2x'}></i> {" Contact Me"}
            </button>

            {/* Modal */}
            <div className="modal fade" id="formspree" tabIndex="-1" role="dialog" aria-labelledby="formspreeTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false" >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-center" id="formspreeModalLongTitle">Contact Me</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {this.toggleButton()}}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="https://formspree.io/iwakoscott@gmail.com" method="POST">
                    <input type="hidden" name="_format" value="plain" />
                    <input className="form-control mb-1 mt-1" type="text" name="name" placeholder="name" required="true"/>
                    <input className="form-control mb-1 mt-1" type="email" name="_replyto" placeholder="email"  required="true"/>
                    <textarea className="form-control mb-1 mt-1" name="message" rows="3" placeholder="your message" required="true"></textarea>
                    <input type="text" name="_gotcha" style={{"display": "none"}} />
                    <input type="hidden" name="_next" value="//" />
                    <button className="btn btn-danger btn-lg mt-3 send-button" type="submit"> <i className="fa fa-paper-plane fa-1x"></i> {"Send"}</button>
                  </form>
                </div>
              </div>
            </div>
            </div>

            </div>
            <div className="col-sm-5 col-md-4">
            <ul className="list-inline">
              <li className="nav-item list-inline-item">
                <a className="nav-link" href="https://github.com/iwakoscott" target="_blank"><i className="fa fa-github-square fa-1x fa-fw"></i>  <span className="user-name">iwakoscott</span></a>
              </li>
              <li className="nav-item list-inline-item">
                <a className="nav-link" href="https://www.linkedin.com/in/iwakoscott/" target="_blank"><i className="fa fa-linkedin-square fa-1x fa-fw"></i>  <span className="user-name">iwakoscott</span></a>
              </li>
              <li>
                <a className="nav-link" href="/assets/media/resume25.pdf" target="_blank"><i className="fa fa-file-pdf-o fa-1x fa-fw"></i>  <span className="user-name">resume</span></a>
              </li>
            </ul>
            </div>
            <div className="col-sm-2 col-md-4">
              <span>{"COPYRIGHT "} &copy; {" 2018 Satoshi Scott Iwako"} </span>
            </div>
          </div>
        </div>
      </footer>
    );
  } // Footer.render
} // Footer

export default Footer;
