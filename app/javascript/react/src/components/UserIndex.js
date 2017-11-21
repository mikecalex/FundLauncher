import React from 'react';
import UserTile from './UserTile'
import moment from 'moment';

const UserIndex = props => {
  let investments = props.investments.map(invest => {

    let date = (invest.created_at);
    let betterDate = Date.parse(date);
    let finalDate = moment(betterDate).format('L');

    let dollars = '$'
    let converted = (invest.amount / 100)
    let integer = (converted).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    let finalAmount = dollars + integer

    return(
      <UserTile
        key={invest.id}
        startupId={invest.startup_id}
        startupName={invest.startupName}
        shares={invest.sharesBought}
        date={finalDate}
        amount={finalAmount}
      />
    )
  })

  return(
    <div id="user-tile-container">
      {investments}
    </div>
  )
}

export default UserIndex
