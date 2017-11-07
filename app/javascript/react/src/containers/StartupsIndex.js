import React from 'react';
import StartupTile from '../components/StartupTile'

const StartupsIndex = props => {
  let startups = props.startups.map(startup => {
    return(
      <StartupTile
        key={startup.id}
        id={startup.id}
        name={startup.name}
        photo={startup.photo_url}
        end_date={startup.end_date}
        start_date={startup.start_date}
        description={startup.description}
      />
    )
  })

  return(
    <div className="column-tiles" >
      {startups}
    </div>
  )
}

export default StartupsIndex
