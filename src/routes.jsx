import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Location from './components/Location';
import Contact from './components/Contact';

const Routes = props => (
  <Router {...props} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/location" component={Location} />
      <Route path="/contact" component={Contact} />
      <Route path="/resources" component={Resources} />
    </Route>
  </Router>
);

export default Routes;
