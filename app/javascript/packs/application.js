import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/App';
import {BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app');

  if (reactElement) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      reactElement
    )
  }
});
