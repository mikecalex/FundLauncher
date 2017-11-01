import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StartupsContainer from './containers/StartupsContainer';
import StartupShowContainer from './containers/StartupShowContainer';

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartupsContainer} />
        <Route exact path="/startups" component={StartupsContainer} />
        <Route exact path="/startups/:id" component={StartupShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
