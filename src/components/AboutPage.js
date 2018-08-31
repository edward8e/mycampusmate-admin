import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Media, Button } from 'reactstrap';
 
import richard from '../assets/profile/richard.jpg';
import edward from '../assets/profile/edward.jpg';
import jorge from '../assets/profile/jorge.jpg';
import dylan from '../assets/profile/dylan.jpeg';

import highlander from '../assets/logo/ucr_highlander.jpg';


export default class AboutPage extends Component {
  render() {
    return (
      <Container>
        {/* <img src={highlander} className="header-image" /> */}

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <img src={richard} circle="true" className="rounded profile-pic"/> */}
            <h3>Richard Heng</h3>
            <p>Lead Software Engineer/Developer</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <img src={edward} circle="true" className="rounded profile-pic"/> */}
            <h3>Edward Hernandez</h3>
            <p>Software Engineer/Design Director</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <img src={jorge} circle="true" className="rounded profile-pic"/> */}
            <h3>Jorge Flores</h3>
            <p>Software Engineer/Database Director</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <img src={dylan} circle="true" className="rounded profile-pic"/> */}
            <h3>Dylan O’Neill</h3>
            <p>Product Engineer</p>
          </Col>
        </Row>
      </Container>
    )
  }
}