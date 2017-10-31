import React, { Component } from 'react'
import StartupsIndex from '../components/StartupsIndex'

class StartupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startups: [],
      user: {}
    }
    this.getStartups = this.getStartups.bind(this)
    this.getUser = this.getUser.bind(this)
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

  render() {
    return(
      <div>
        <div className="row column text-center">
          <h3>Startups</h3>
        </div>
        <StartupsIndex
          startups={this.state.startups}
        />
      </div>
    )
  }
}

export default StartupsContainer
