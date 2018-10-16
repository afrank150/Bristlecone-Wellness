import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Redirect,
} from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Resources from './components/Resources';
import Contact from './components/Contact';

const Routes = props => (
  <Router {...props} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/resources" component={Resources} />
      <Redirect from="/*" to="/" />
    </Route>
  </Router>
);

export default Routes;
