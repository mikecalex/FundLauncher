import React from 'react';
import StartupTile from './StartupTile'

const StartupsIndex = props => {
  let startups = props.startups.map(startup => {
    return(
      <StartupTile
        key={startup.id}
        id={startup.id}
        name={startup.name}
        photo={startup.photo_url}
        description={startup.description}
      />
    )
  })

  return(
    <div className="column-tiles" key={"startup-listing"}>
      {startups}
    </div>
  )
}

export default StartupsIndex
