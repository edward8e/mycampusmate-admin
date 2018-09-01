import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
import '../src/components/NavBar.css';
import '../src/components/HomePage.scss';

// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
import HomePage from '../src/components/HomePage';
import AboutPage from '../src/components/AboutPage';

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/about" name="About" component={AboutPage}/>
      <Route exact path="/" name="Home" component={HomePage}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
