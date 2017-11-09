import React from 'react';
import StartupTile from './StartupTile'

const StartupsIndex = props => {
  let startups = props.startups.map(startup => {

  let startDate= new Date()
  let endDate=(startup.end_date);

  let diffSec = Date.parse(endDate) - Date.parse(startDate) ;
  let date = (Math.ceil(diffSec / (1000*60*60*24)) + " days to go");

    return(
      <StartupTile
        key={startup.id}
        id={startup.id}
        name={startup.name}
        photo={startup.photo_url}
        end_date={startup.end_date}
        start_date={startup.start_date}
        description={startup.description}
        daysToGo={date}
      />
    )
  })

  return(
    <div id="tile-container">
      {startups}
    </div>
  )
}

export default StartupsIndex
