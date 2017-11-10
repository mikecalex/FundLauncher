import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import CircularProgressbar from '../containers/CircularProgressbar'

const StartupTile = props => {

  return(
    <div className="small-1 medium-3 large-3 columns">
      <Link to={`/startups/${props.id}`}>
        <img className="thumbnail" size="20x20" src={props.photo} />
        <br/>
        <h5><strong>{props.name}</strong></h5>
        <p className="desc">{props.description}</p>
        <h6 className="date">{props.daysToGo}</h6>
        <div className="circle-perc">
          <CircularProgressbar percentage={props.perc} />
        </div>
      </Link>
    </div>
  )
}

export default StartupTile
