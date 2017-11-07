import React, { Component } from 'react'
import StartupsIndex from './StartupsIndex'
import StartupFormContainer from './StartupFormContainer'
import Modal from '../components/Modal'


class StartupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startups: [],
      user: {},
      isOpen: false
    }
    this.getStartups = this.getStartups.bind(this)
    this.getUser = this.getUser.bind(this)
    this.addNewStartup = this.addNewStartup.bind(this)
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
        <div className="hero-image">
          <div className="hero-text">
            <h1><strong>FundLauncher</strong></h1>
            <h6>Joining Businesses and Investors</h6>
          </div>
        </div>
        <div className="row text-center">
          <h3><strong>Featured Startups</strong></h3>
        </div>
        <StartupsIndex
          startups={this.state.startups}
        />

        <div className="modal">
          <button onClick={this.toggleModal}>
            Start a New Funding Round
          </button>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <StartupFormContainer
              user={this.state.user}
              handleSubmit={handleSubmit}
            />
          </Modal>
        </div>
      </div>
    )
  }
}

export default StartupsContainer
