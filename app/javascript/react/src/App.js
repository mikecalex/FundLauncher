import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, IndexRoute } from 'react-router-dom'
import StartupsContainer from './containers/StartupsContainer';
import StartupShowContainer from './containers/StartupShowContainer';
import registerServiceWorker from './components/registerServiceWorker';
import UserShowContainer from './containers/UserShowContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.loadUserData = this.loadUserData.bind(this)
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData() {
   fetch('/api/v1/users', {
     credentials: 'same-origin',
     method: 'GET',
     headers: {'Content-Type': 'application/json'}
   })
   .then(response => {
     if (response.ok) {
       return response;
     }
   })
   .then(response => response.json())
   .then(json => {
     this.setState({
       currentUser: json.current_user
     })
   })
 }

   render() {

    return(
      <Switch>
          <Route exact path="/" render={props => (
            <StartupsContainer {...props} currentUser={this.state.currentUser} />
          )}/>
          <Route exact path="/startups" render={props => (
            <StartupsContainer {...props} currentUser={this.state.currentUser} />
          )}/>
          <Route exact path="/startups/:id" render={props => (
            <StartupShowContainer {...props} currentUser={this.state.currentUser} />
          )}/>
          <Route exact path="/users/:id" component={UserShowContainer}/>

      </Switch>
    )
  }
}

export default App
