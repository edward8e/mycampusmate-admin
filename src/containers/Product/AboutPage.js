import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Media, Button } from "reactstrap";

import richard from "../../assets/profile/richard.jpg";
import edward from "../../assets/profile/edward.jpg";
import jorge from "../../assets/profile/jorge.jpg";
import dylan from "../../assets/profile/dylan.jpeg";
import michalis from "../../assets/profile/michalis.jpg";
import christos from "../../assets/profile/christos.jpg";


import highlander from "../../assets/logo/ucr_highlander.jpg";

import NavBar from "./NavBar";

import "./AboutPage.scss";

class AboutPage extends Component {
  render() {
    return (
      <div className="light-bg">
        <NavBar />
        <Container className="pt-5 pb-5">
          <section id="team-header" className="parallax page-header">
            <div className="container">
              <Row>
                <div className="team-headline">
                  <h2>Meet The MyCampusMate Team</h2>
                  <p>
                    MyCampusMate started from a group of students that competed
                    in UCR Cutie Hackathon competition. We decided to pursue our
                    app idea and try to make this into a real product and
                    company. With the guidance from a Professor at UCR we were
                    are able to move forward and gain exposure from the school.
                    Our goal is to make a app that can help all students who
                    attend univeristies by making their school experience less
                    stressful and easier.
                  </p>
                </div>
              </Row>
            </div>
          </section>

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="team">
              <img src={christos} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Christos Kritikos</h3>
              <p>CEO</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={michalis} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Michalis Faloutsos</h3>
              <p>CTO</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={richard} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Richard Heng</h3>
              <p>Lead Developer</p>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="team">
              <img src={dylan} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Dylan O’Neill</h3>
              <p>Product Engineer</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={edward} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Edward Hernandez</h3>
              <p>Design Director</p>
            </Col>
            <Col xs={12} sm={4} className="team">
              <img src={jorge} className="rounded-circle" />
              <h3 className="pt-1 mt-1">Jorge Flores</h3>
              <p>Database Director</p>
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
