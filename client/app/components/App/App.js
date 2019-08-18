import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import NotFound from '../App/NotFound';
// import Nav from "../Nav";
import Home from "../Home"
import ArticlePage from "../ArticlePage"


const App = (props) => (
  <>
    <main>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            Article Viewer
          </span>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:slug" component={ArticlePage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </>
);

export default App;
