import React, { Component } from "react";
import { Row, Col, CardGroup } from "reactstrap";
import CardWidget from "../../components/Widgets/Widget04";

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <h1 className="display-1">Welcome -Name-</h1>
        <Row>
          <Col>
            <CardWidget
              icon="icon-people"
              color="info"
              header="125"
              value="25"
            >
              Total Club Followers
            </CardWidget>
          </Col>
          <Col>
            <CardWidget
              icon="icon-user-follow"
              color="success"
              header="5"
              value="25"
            >
              New Club Followers
            </CardWidget>
          </Col>
          <Col>
            <CardWidget
              icon="icon-pie-chart" color="warning" header="28%" value="25"
            >
              Returning Club Members
            </CardWidget>
          </Col>
          <Col>
            <CardWidget
              icon="icon-calendar" color="danger" header="8" value="25"
            >
              Total Events this Week
            </CardWidget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
