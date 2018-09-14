import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Media, Button } from "reactstrap";

import richard from "../assets/profile/richard.jpg";
import edward from "../assets/profile/edward.jpg";
import jorge from "../assets/profile/jorge.jpg";
import dylan from "../assets/profile/dylan.jpeg";
import michalis from "../assets/profile/michalis.jpg";

import highlander from "../assets/logo/ucr_highlander.jpg";

import NavBar from "./NavBar";

import "./AboutPage.scss";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="pt-5 pb-5">
          <Jumbotron>
            <h2>Welcome to CodeLife</h2>
            <p>
              This is how to build a website with React, React-Router &
              React-Bootstrap
            </p>
            <Link to="/about">
              <Button className="btn-primary">Learn More</Button>
            </Link>
          </Jumbotron>
          <div className="page-header text-center">
              <h2>The Team</h2>
          </div>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="team">
              <img src={richard} className="rounded-circle" />
              <h3>Richard Heng</h3>
              <p>Lead Developer</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={edward} className="rounded-circle" />
              <h3>Edward Hernandez</h3>
              <p>Design Director</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={jorge} className="rounded-circle" />
              <h3>Jorge Flores</h3>
              <p>Database Director</p>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="team">
              <img src={dylan} className="rounded-circle" />
              <h3>Dylan O’Neill</h3>
              <p>Product Engineer</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={michalis} className="rounded-circle" />
              <h3>Michalis Faloutsos</h3>
              <p>Professor at UCR and President of Programize LLC</p>
            </Col>
          </Row>
        </Container>

        <footer className="color-footer">
          <div className="container">
            <p className="footer-info">
              © 2018 - <strong>MyCampusMate</strong> - All Rights Reserved
              <span className="social pull-right">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default AboutPage;
