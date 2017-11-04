import React, { Component } from 'react'
import StartupsIndex from '../components/StartupsIndex'
import StartupFormContainer from './StartupFormContainer'

class StartupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startups: [],
      user: {}
    }
    this.getStartups = this.getStartups.bind(this)
    this.getUser = this.getUser.bind(this)
    this.addNewStartup = this.addNewStartup.bind(this)
  }

  componentDidMount() {
    this.getStartups()
    this.getUser()
  }

  getUser() {
    fetch('api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json });
      });
  }

  getStartups() {
    fetch('api/v1/startups', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ startups: json });
      });
  }

  addNewStartup(formPayload) {
    fetch('api/v1/startups', {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => {return response.json()
      })
      .then(json => {
        let newStartupsArray = this.state.startups.concat(json.startup)
        this.setState({ startups: newStartupsArray })
      })
  }

  render() {
    let handleSubmit = (formPayload) => {
      this.addNewStartup(formPayload)
    }
    return(
      <div className="main-app">
        <div className="hero">
          <img className="hero-image" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/DSC04986.jpg?zoom=2&w=2210&quality=50"/>
        </div>
        <div className="row text-center">
          <h3><strong>Featured Startups</strong></h3>
        </div>
        <StartupsIndex
          startups={this.state.startups}
        />
        <div className="small-up-2 large-up-2">
          <div className="column">
            <h3><strong>Add a New Project</strong></h3>
            <StartupFormContainer
              user={this.state.user}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default StartupsContainer
