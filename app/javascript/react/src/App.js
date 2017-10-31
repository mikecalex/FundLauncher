import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StartupsContainer from './containers/StartupsContainer';

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartupsContainer} />
        <Route exact path="/startups" component={StartupsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
