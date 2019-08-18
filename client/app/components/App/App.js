import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import NotFound from '../App/NotFound';
import Nav from "../Nav";
import Home from "../Home"
import ArticlePage from "../ArticlePage"


const App = (props) => (
  <>
    <main>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:slug" component={ArticlePage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </>
);

export default App;
