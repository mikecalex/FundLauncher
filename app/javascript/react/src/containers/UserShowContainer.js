import React, { Component } from 'react'
import UserShow from '../components/UserShow'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      investments: {}
    }
    this.getUser = this.getUser.bind(this)
    this.getInvestments = this.getInvestments.bind(this)
  }

  componentDidMount() {
    this.getUser()

  }

  getUser() {
    let userId = this.props.match.params.id
    fetch(`/api/v1/users/${userId}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json.user });
      });
  }

  render() {

    return(
      <UserShow
        id={this.state.user.id}
        firstName={this.state.user.first_name}
        lastName={this.state.user.last_name}
        image={this.state.user.image}
        email={this.state.user.email}
        investments={this.state.investments}
      />
    )
  }
}

export default UserShowContainer
