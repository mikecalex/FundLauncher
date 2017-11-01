import React from 'react';
import { Link } from 'react-router';

const StartupTile = props => {

  return(
    <div className="row small-up-2 large-up-4">
      <div className="column">
        <Link to={`/startups/${props.id}`}>
          <h5>{props.name}</h5>
          <h6>{props.description}</h6>
          <img className="thumbnail" size="20x20" src={props.photo}  />
        </Link>
      </div>
    </div>
  )
}

export default StartupTile
