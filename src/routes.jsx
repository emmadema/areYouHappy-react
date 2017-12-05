//All routes here for all pages

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Contact from './components/views/contact';
import Happy from './components/views/happy';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='happy' component={Happy} />
    <Route path='*' component={Home} />
  </Route>
);