import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const UserShow = props => {

  return(
    <div className="user-page">
      <div>
        <h2 className="user-name"><strong>{props.firstName} {props.lastName}</strong></h2>
      </div>
      <h6 className="email">{props.email}</h6>
      <div className="user-investments">
        
      </div>
    </div>
  )
}

export default UserShow
