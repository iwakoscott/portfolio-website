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
    const collection = this.state.projects ? this.state.projects.map( (project) => {
      return (
        <Project key={project.name}
                 name={project.name}
                 thumbnail={project.thumbnail}
                 description={project.description}
                 liveUrl={project.live}
                 codeUrl={project.code}
                 rank={project.rank}/>
      );
    });
  } // Projects.render

} // Projects
