import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from '../components/CarouselComponent'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <CarouselComponent />
        <Row>
      <Col sm="3">
        <Card body>
          <CardTitle>Student Onboarding</CardTitle>
          <CardText>Student success starts by engaging and connecting with students on their terms.</CardText>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Student Retention</CardTitle>
          <CardText>Among public institutions, only 64% of freshmen return for their sophomore year.</CardText>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Degree Completion</CardTitle>
          <CardText>Only 59% of undergraduate students at 4-year institutions graduate in 6 years.</CardText>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>Lifelong Relationships</CardTitle>
          <CardText>Universities yearn to build lifelong relationships beginning with prospective students through alumni.</CardText>
        </Card>
      </Col>
    </Row>
      </div>
    );
  }
}

export default HomePage;
