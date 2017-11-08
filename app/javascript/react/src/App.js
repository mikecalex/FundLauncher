import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import StartupsContainer from './containers/StartupsContainer';
import StartupShowContainer from './containers/StartupShowContainer';
import registerServiceWorker from './components/registerServiceWorker';

const App = props => {

  return(
    <Router history={browserHistory}>
        <Route exact path="/" component={StartupsContainer} />
        <Route exact path="/startups" component={StartupsContainer} />
        <Route exact path="/startups/:id" component={StartupShowContainer} />
    </Router>
  )
}

export default App
