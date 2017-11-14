import React, { Component } from 'react'
import StartupsIndex from '../components/StartupsIndex'
import StartupFormContainer from './StartupFormContainer'
import Modal from '../components/Modal'
import Ticker from './Ticker'
import Category from './Category'
import SweetAlert from 'react-bootstrap-sweetalert'

class StartupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startups: [],
      user: {},
      isOpen: false,
      alert: false
    }
    this.getStartups = this.getStartups.bind(this)
    this.getUser = this.getUser.bind(this)
    this.addNewStartup = this.addNewStartup.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
  }

  toggleModal = () => {
    if (!this.props.currentUser) {
      this.setState({
        alert: !this.state.alert
      });
      } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  hideAlert = () => {
    this.setState({
      alert: !this.state.alert
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
          <h3 className="featured-title"><strong>Featured Startups</strong></h3>
        </div>
        <div className="small-12 medium-8 large-8 columns" id="tiles">
          <StartupsIndex
            startups={this.state.startups}
          />
        </div>
        <div className="small-0 medium-2 large-4 columns" id="side-category">
          <SweetAlert
            show={this.state.alert}
            title="You must sign in first!"
            onConfirm={this.hideAlert}
          />
          <div className="modal">
            <button className="new-form" onClick={this.toggleModal} >
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
            <div className="categorysec">
            <div className="cattile">Tech</div>
            <div className="cattile">Electronic</div>
            <div className="cattile">Politics</div>
            <div className="cattile">Games</div>
            <div className="cattile">Social</div>
            <div className="cattile">Entertainment</div>
            <div className="cattile">Finance</div>
            <div className="cattile">Music</div>
            </div>
        </div>

      </div>
    )
  }
}

export default StartupsContainer
