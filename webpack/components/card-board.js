import React from 'react';

function CardBoard(props) {
  return (
    <div className="container-fluid mt-5 mb-5 card-board">

      <div className="row">
        <div id="badge" className="col-2 offset-5">
          <i className={props.faClass + ' ' + 'fa-5x mt-3 mb-3'}></i>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center card-board-header m-2">{props.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <p className="lead">{props.content}</p>
        </div>
      </div>

    </div>
  );
}

export default CardBoard;
