import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const UserShow = props => {

  return(
    <div className="user-page">
      <h5><strong>{props.firstName} {props.lastName}</strong></h5>
      <h6 className="email">{props.email}</h6>
    </div>
  )
}

export default UserShow
