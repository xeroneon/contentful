import React from 'react';
import { render } from 'react-dom';
import StoreProvider from "./globalState/store"

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import App from './components/App/App';

import './styles/styles.scss';

render((
  <Router>
      <StoreProvider>
        <App />
      </StoreProvider>
  </Router>
), document.getElementById('app'));
