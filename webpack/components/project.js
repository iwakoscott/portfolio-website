import React from 'react';

function Project(props){
  return (
    <div className="card">
      <img className="card-img-top img-thumbnail img-project" src={props.thumbnail} alt={props.name} width="100%"/>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
        <div className="text-center">
          <div className="btn-group project-buttons" role="group" aria-label="project-buttons">
            <a className="btn btn-outline-light" href={props.liveUrl} target="_blank">{"Live"}</a>
            <a className="btn btn-outline-light" href={props.codeUrl} target="_blank">{"Code"}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
