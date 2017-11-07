import React, { Component } from 'react'
import StartupShow from '../components/StartupShow';

class StartupShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startup: {},
      user: {}
    }
    this.getStartup = this.getStartup.bind(this)
  }

  componentDidMount() {
    this.getStartup();
  }

  formatMoney(integer) {
    if (integer != null) {
      let dollars = '$'
      dollars += integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return dollars
    }
    else {
      return 0
    }
  }

  formatInteger(integer) {
    if (integer != null) {
      let number = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return number
    }
    else {
      return 0
    }
  }

  getStartup() {
    let startupId = this.props.params.id
    fetch(`/api/v1/startups/${startupId}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ startup: json.startup })
    });
  }

  render() {
    let current_funding = this.formatMoney(this.state.startup.current_funding)
    let desired_funding = this.formatMoney(this.state.startup.desired_funding)
    let shares_available = this.formatInteger(this.state.startup.shares_available)
    let dollars = '$'
    let sharePrice = dollars += this.state.startup.desired_funding / this.state.startup.shares_available
    let sharePriceCalc = this.state.startup.desired_funding / this.state.startup.shares_available
    return(
      <StartupShow
        id={this.state.startup.id}
        name={this.state.startup.name}
        description={this.state.startup.description}
        category={this.state.startup.category}
        desired={desired_funding}
        current={current_funding}
        total={shares_available}
        start={this.state.startup.start_date}
        end={this.state.startup.end_date}
        photo={this.state.startup.photo_url}
        sharePrice={sharePrice}
        sharePriceCalc={sharePriceCalc}
      />
    )
  }
}

export default StartupShowContainer
