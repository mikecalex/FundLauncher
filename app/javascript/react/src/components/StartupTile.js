import React from 'react';
import { Link } from 'react-router';

const StartupTile = props => {

  return(
    <div className="small-1 medium-3 large-3 columns">
      <Link to={`/startups/${props.id}`}>
        <img className="thumbnail" size="20x20" src={props.photo} />
        <br/>
        <h5><strong>{props.name}</strong></h5>
        <h6>{props.description}</h6>
      </Link>
    </div>
  )
}

export default StartupTile
