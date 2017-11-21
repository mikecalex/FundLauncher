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
      alert: false,
      categorySelection: ''
    }
    this.getStartups = this.getStartups.bind(this)
    this.getUser = this.getUser.bind(this)
    this.addNewStartup = this.addNewStartup.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.handleClickPolitics = this.handleClickPolitics.bind(this);
    this.handleClickGames = this.handleClickGames.bind(this);
    this.handleClickSocial = this.handleClickSocial.bind(this);
    this.handleClickEntertainment = this.handleClickEntertainment.bind(this);
    this.handleClickFinance = this.handleClickFinance.bind(this);
    this.handleClickMusic = this.handleClickMusic.bind(this);
    this.handleClickEducation = this.handleClickEducation.bind(this);
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

  handleClickAll(event) {
    fetch('api/v1/startups', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickEducation(event) {
    fetch('api/v1/education', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickEntertainment(event) {
    fetch('api/v1/entertainment', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickFinance(event) {
    fetch('api/v1/finance', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickGames(event) {
    fetch('api/v1/games', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickMusic(event) {
    fetch('api/v1/music', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickPolitics(event) {
    fetch('api/v1/politics', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }


  handleClickSocial(event) {
    fetch('api/v1/social', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  handleClickTech(event) {
    fetch('api/v1/tech', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startups: json });
    });
  }

  addNewStartup(formPayload) {
    fetch('api/v1/startups' , {
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
            categorySelection={this.state.categorySelection}
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
          <div className="row">
            <div className="category-field">
              <h5>Categories</h5>
              <div className="cattile" onClick={this.handleClickAll}>All</div>
              <div className="cattile" onClick={this.handleClickEntertainment}>Entertainment</div>
              <div className="cattile" onClick={this.handleClickEducation}>Education</div>
              <div className="cattile" onClick={this.handleClickFinance}>Finance</div>
              <div className="cattile" onClick={this.handleClickGames}>Games</div>
              <div className="cattile" onClick={this.handleClickMusic}>Music</div>
              <div className="cattile" onClick={this.handleClickPolitics}>Politics</div>
              <div className="cattile" onClick={this.handleClickSocial}>Social</div>
              <div className="cattile" onClick={this.handleClickTech}>Tech</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartupsContainer
