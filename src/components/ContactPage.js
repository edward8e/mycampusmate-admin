import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Media, Button } from "reactstrap";

import CompanyContact from "../views/ContactUs/CompanyContact";
import NavBar from "./NavBar";
import "./ContactPage.scss";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Container className="pt-5 pb-5">
          <div>
            <p className="text-center">
              For any questions about our services or help with a problem.{" "}
            </p>
          </div>
          <CompanyContact />
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

export default ContactPage;
