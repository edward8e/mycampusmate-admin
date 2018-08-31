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
                <p className="display-4 text-left">
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
                  <Button className="app-store" color="primary">
                    Get Started
                  </Button>
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </div>

        <div className="pb-2 mt-4 mb-2 border-bottom text-center">
          <h2>Features</h2>
        </div>

        <div>
          <Container className="text-center">
            <Row>
              <Col xs={12} sm={4}>
                <h3>Classroom Navigation</h3>
                <p>
                  Get directions from anywhere right to your classroom door! No
                  more getting lost getting around UCR!
                </p>
              </Col>
              <Col xs={12} sm={4}>
                <h3>Class Schedule Management</h3>
                <p>
                  Keep track of your classes all in one easy to access place!
                  Once your classes schedule is in the app, it makes navigating
                  to them easier!
                </p>
              </Col>
              <Col xs={12} sm={4}>
                <h3>UCR Points-of-Interest</h3>
                <p>
                  Quickly find any UCR Point-of-Interest at your convience like
                  Scotty's Market, Libraries, Food Courts, Coffee Shops, Bike
                  Racks, and more!
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                <h3>Classroom Navigation</h3>
                <p>
                  Get directions from anywhere right to your classroom door! No
                  more getting lost getting around UCR!
                </p>
              </Col>
              <Col xs={12} sm={4}>
                <h3>Class Schedule Management</h3>
                <p>
                  Keep track of your classes all in one easy to access place!
                  Once your classes schedule is in the app, it makes navigating
                  to them easier!
                </p>
              </Col>
              <Col xs={12} sm={4}>
                <h3>UCR Points-of-Interest</h3>
                <p>
                  Quickly find any UCR Point-of-Interest at your convience like
                  Scotty's Market, Libraries, Food Courts, Coffee Shops, Bike
                  Racks, and more!
                </p>
              </Col>
            </Row>
            <div />
          </Container>
        </div>

        <Container fluid className="bg-light">
          <div className="pb-2 mt-4 mb-2 text-center">
            <h1>The Team</h1>
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
      </div>
    );
  }
}

export default HomePage;
