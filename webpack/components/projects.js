import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './project.js';

class Projects extends Component {

  constructor(){
    super();
    this.state = {
      projects: Array(),
      showProjects: false
    };

    this.toggleProjects = this.toggleProjects.bind(this);
  } // Projects.constructor

  toggleProjects(){
    this.setState({ showProjects: !this.state.showProjects });
    if (this.state.showProjects) {
      setTimeout(() => { document.getElementById("where-im-going").scrollIntoView();
 }, 400);
    }
  } // Projects.toggleProjects

  componentDidMount(){
    let projects = require('../../_data/projects.json');
    this.setState({ projects });
  } // Projects.componentDidMount

  render(){
    const collection = this.state.showProjects ? this.state.projects.map((project, i) => {
      return (
          <Project key={i}
                   name={project.name}
                   thumbnail={project.thumbnail}
                   description={project.description}
                   liveUrl={project.live}
                   codeUrl={project.code}
                   size={project.size}/>
      );
    }) : [];

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="card-columns">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={100}>
              { collection.length > 0 ? collection : ''}
            </ReactCSSTransitionGroup>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-4 offset-sm-4">
            <button id="toggle-projects-button" className="btn btn-danger btn-lg toggle-projects-btn mb-3 mt-3"
                    onClick={() => {this.toggleProjects()}}>{this.state.showProjects ? "Hide Projects" : "Show Projects"}</button>
          </div>
        </div>
      </div>
    );
  } // Projects.render

} // Projects

export default Projects;
