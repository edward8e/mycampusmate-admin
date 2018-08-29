import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Clubs from '../../views/Clubs/Main/Clubs';
import AddClubs from '../../views/Clubs/AddClubs/AddClubs';
import DeleteClubs from '../../views/Clubs/DeleteClubs/DeleteClubs';
import ContactUs from '../../views/ContactUs/';
import Login from '../../views/Login/Login';
import Register from '../../views/Register/Register';
import ForgotPassword from '../../views/ForgotPassword/ForgotPassword';
import {Provider} from 'react-redux';
//import rootReducer from '../../redux/reducers';

import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from '../../redux/reducers/authReducer';
import addEventReducer from '../../redux/reducers/addEventReducer';
import deleteEventReducer from '../../redux/reducers/deleteEventReducer';
const allReducers = combineReducers({
  auth: authReducer,
  addEvent: addEventReducer,
  deleteEvent_ID: deleteEventReducer,
});
const store = createStore(allReducers,{},compose(applyMiddleware(ReduxThunk)));
//import store from '../../redux/store/index';

class Full extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/home" name="home" component={Dashboard}/>
                <Route path="/clubs" name="Clubs" component={Clubs}/>
                <Route path="/addclubs" name="AddClubs" component={AddClubs}/>
                <Route path="/deleteclubs" name="DeleteClubs" component={DeleteClubs}/>
                <Route path="/register" name="Register" component={Register}/>
                <Route path="/login" name="Login" component={Login}/>
                <Route path="/forgotpassword" name="ForgotPassword" component={ForgotPassword}/>
                <Route path="/contactus" name="ContactUs" component={ContactUs}/>
                {/* <Redirect from="/" to="/login"/> */}
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
      </Provider>
    );
  }
}

export default Full;
