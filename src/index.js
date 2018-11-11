import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";

// Styles
import "./containers/Product/NavBar.css";
// import './containers/Product/HomePage.scss';
import "./containers/Product/AboutPage.scss";

// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";
import HttpsRedirect from 'react-https-redirect';
// Containers
import Full from "./containers/Full/";
import HomePage from "./containers/Product/HomePage";
import AboutPage from "./containers/Product/AboutPage";
import ContactPage from "./containers/Product/ContactPage";

ReactDOM.render(
  <HttpsRedirect>
  <HashRouter>
    <Switch>
      <Route path="/about" name="About" component={AboutPage} />
      <Route path="/contact" name="Contact" component={ContactPage} />

      {/* <Route path="/login" name="Login" component={Full} />
      <Route path="/dashboard" name="Dashboard" component={Full} />
      <Route path="/addclubs" name="AddClubs" component={Full} />
      <Route path="/deleteclubs" name="DeleteClubs" component={Full} /> */}

      <Route path="/dashboard" name="Dashboard" component={Full} />
      <Route path="/clubs" name="Clubs" component={Full} />
      <Route path="/addclubs" name="AddClubs" component={Full} />
      <Route path="/deleteclubs" name="DeleteClubs" component={Full} />
      <Route path="/editevent" name="EditEvent" component={Full} />
      <Route path="/register" name="Register" component={Full} />
      <Route path="/editclubinfo" name="EditClubInfo" component={Full} />
      <Route path="/login" name="Login" component={Full} />
      <Route path="/forgotpassword" name="ForgotPassword" component={Full} />
      <Route path="/addofficer" name="AddOfficer" component={Full} />
      <Route path="/deleteofficer" name="DeleteOfficer" component={Full} />
      <Route path="/contactus" name="ContactUs" component={Full} />

      <Route path="/" name="Home" component={HomePage} />
    </Switch>
  </HashRouter> </HttpsRedirect>,
  document.getElementById("root")
);
