import React, { Component } from 'react'
import StartupsIndex from '../components/StartupsIndex'
import StartupFormContainer from './StartupFormContainer'
import Modal from '../components/Modal'
import Ticker from './Ticker'

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

        <Ticker />

        <div className="row text-center">
          <h3><strong>Featured Startups</strong></h3>
        </div>
        <div className="small-12 medium-8 large-8 columns" id="tiles">
          <StartupsIndex
            startups={this.state.startups}
          />
        </div>
        <div className="small-12 medium-4 large-4 columns" id="side-category">
          <div className="modal">
            <button className="new-form" onClick={this.toggleModal}>
              Start a New Funding Round
            </button>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              <StartupFormContainer
                user={this.state.user}
                handleSubmit={handleSubmit}
                currentUser={this.props.currentUser}
              />
            </Modal>

            <h5>Categories</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default StartupsContainer
