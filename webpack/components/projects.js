import React, { Component } from 'react';
import Project from './project.js';

class Projects extends Component {

  constructor(){
    super();
    this.state = { projects: [] };
  }

  componentDidMount(){
    let projects = require('../../_data/projects.json');
    this.setState({ projects });
  } // Projects.componentDidMount

  render(){
    const collection = this.state.projects.length > 0 ? this.state.projects.map((project, i) => {
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
      <div className="card-columns">
        { collection.length > 0 ? collection : ''}
      </div>
    );
  } // Projects.render

} // Projects

export default Projects;
