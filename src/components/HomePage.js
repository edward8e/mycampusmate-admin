import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron,
  Button,
  Container
} from "reactstrap";

import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Carousel from "./Carousel";

import richard from "../assets/profile/richard.jpg";
import edward from "../assets/profile/edward.jpg";
import jorge from "../assets/profile/jorge.jpg";
import dylan from "../assets/profile/dylan.jpeg";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />

          <Jumbotron className="display-4">
            <Row>
              <Col xs={12} sm={6}>
                <img
                  src="https://www.kingstudio.ro/demos/theone/images/apps.png"
                  alt=""
                  className="app-picture mx-auto d-block"
                />
              </Col>

              <Col xs={12} sm={6}>
                <h3 className="display-2 pr-1 mt-5 mb-5">RMate</h3>
                <p className="display-3 text-left pr-5 mr-5 pb-2">
                  RMate is your One-Stop-Shop for student success
                </p>

                <p className="lead">
                  <a href="https://play.google.com/store/apps/details?id=com.mycampusmate.rmate">
                    <img
                      src="https://edward8e.github.io/Rmate_site/img/google-play-badge.svg"
                      alt=""
                      className="app-store"
                    />
                  </a>
                  <a href="https://itunes.apple.com/app/id1418361482">
                    <img
                      src="https://www.kingstudio.ro/demos/theone/images/app-store.png"
                      alt=""
                      className="app-store mx-auto"
                    />
                  </a>
                  {/* <Button className="app-store" color="primary">
                    Get Started
                  </Button> */}
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </div>

        <section id="more-features" className="centered-features fluid">
          <div className="container">
            <div className="page-header text-center">
              <h2>App Features</h2>
            </div>
            <div className="row">
              <div className="col-md-4 feature-left">
                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-compass rounded" />
                  </div>
                  <h5>Classroom Navigation</h5>
                  <p>
                    Get directions from anywhere right to your classroom door!
                    No more getting lost getting around UCR!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-book rounded" />
                  </div>
                  <h5>Class Schedule Management</h5>
                  <p>
                    Keep track of your classes all in one easy to access place!
                    Once your classes schedule is in the app, it makes
                    navigating to them easier!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa fa-mouse-pointer rounded" />
                  </div>
                  <h5>UCR Points-of-Interest</h5>
                  <p>
                    Quickly find any UCR Point-of-Interest at your convience
                    like Scotty's Market, Libraries, Food Courts, Coffee Shops,
                    Bike Racks, and more!
                  </p>
                </div>
              </div>

              <div className="col-md-4 center-feature-image">
                <img
                  src="https://i.imgur.com/zILUpf8.jpg"
                  alt=""
                  className="feature-picture"
                />{" "}
              </div>

              <div className="col-md-4 feature-right">
                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-calendar rounded" />
                  </div>
                  <h5>School Events</h5>
                  <p>
                    Never miss another school event with up to date info on
                    Student Development Workshops, ASUCR Events/Concerts, and
                    Undergraduate Reasearch Opportunites!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-book rounded" />
                  </div>
                  <h5>School Clubs</h5>
                  <p>
                    Always be up to date with all your schoo clubs! Never miss a
                    club event again!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-registered rounded" />
                  </div>
                  <h5>R Coin</h5>
                  <p>
                    Explore around campus to earn R-Coins! Use them to customize
                    your student experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Container fluid className="bg-light">
          <div className="pb-2 mt-4 mb-2 text-center">
            <h1 className="pt-5 mt-5">The Team</h1>
          </div>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3}>
              <img src={richard} className="rounded-circle" />
              <h3>Richard Heng</h3>
              <p className="lead">Lead Developer</p>
            </Col>
            <Col xs={12} sm={3}>
              <img src={edward} className="rounded-circle" />
              <h3>Edward Hernandez</h3>
              <p className="lead">Design Director</p>
            </Col>
            <Col xs={12} sm={3}>
              <img src={jorge} className="rounded-circle" />
              <h3>Jorge Flores</h3>
              <p className="lead">Database Director</p>
            </Col>
            <Col xs={12} sm={3}>
              <img src={dylan} className="rounded-circle" />
              <h3>Dylan O’Neill</h3>
              <p className="lead">Product Engineer</p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-dark text-center">
          <p>© 2018 CampusMate. All Rights Reserved.</p>
          <ul class="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default HomePage;
