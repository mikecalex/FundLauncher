import React from 'react';

const UserTile = props => {

  return(
    <div className="small-12 medium-2 large-2 columns" id="investment-tile">
      <h2 className="startup-name"><strong>{props.startupName} </strong></h2>
      <div className="investment-details">
        <h5 className="invest-shares">Shares purchased: {props.shares}</h5>
        <h5 className="invest-amount">Total cost:  {props.amount}</h5>
        <h5 className="invest-date">Date purchased:  {props.date}</h5>
      </div>
    </div>
  )
}

export default UserTile
