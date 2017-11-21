import React, { Component } from 'react'
import UserIndex from '../components/UserIndex'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        investments: []
      }
    }
    this.getUser = this.getUser.bind(this)
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
      <div className="user-page">
        <div className="user-name-sec">
          <div className="user-name">{this.state.user.first_name} {this.state.user.last_name}</div>
          <div className="profile-page-pic">
            <img className="user-image" src={this.state.user.image}/>
          </div>
          <div className="user-email">{this.state.user.email}</div>
        </div>
        <div className="investment-title">Investing History</div>
        <UserIndex
          investments={this.state.user.investments}
        />
      </div>
    )
  }
}

export default UserShowContainer
