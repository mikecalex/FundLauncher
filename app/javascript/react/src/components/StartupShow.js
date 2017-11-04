import React from 'react';
import { browserHistory, Link } from 'react-router';
import BackButton from './BackButton.js';

const StartupShow = (props) => {
  return(
    <div className="show-row">
      <div className="small-12 medium-8 large-8 columns" id="showpicture">
        <p><img className="show" width="460px" height="320px" src={props.photo}/></p>
      </div>

      <div className="small-12 medium-4 large-4 columns" id="side-nav">
        <ul className="side-nav">
          <h2>{props.name}</h2>
          <p>Category: {props.category}</p>
          <p>Desired Funding: {props.desired}</p>
          <p>Current Investments: {props.current}</p>
          <p>Total Shares Available: {props.total}</p>
          <p>Campaign Start Date: {props.start} </p>
          <p>Campaign End Date: {props.end} </p>

          <button className="invest-button" type="button" to='#'> Invest </button>

          <div>
            <BackButton />
            { props.children }
          </div>
        </ul>
      </div>

      <div className="small-12 medium-12 large-12 columns">
        <h4>Description:</h4>
        <p>{props.description}</p>
      </div>

    </div>
  )
}

export default StartupShow;
