import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import API from '../../../api';
import Select from "react-select";
import "react-select/dist/react-select.css";
class DeleteOfficer extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      club_name:'',
      clubs: [],
    };
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  componentWillMount(){
        var i = "1";
        for (i = "1"; i < "35"; i++) {
          fetch(API.ROOT_URL + "organizations?page=" + i)
            .then(res => res.json())
            .then(res => {
              for (var j = "0"; j < "15"; j++) {
                // works
                this.setState({ clubs: [...this.state.clubs, res[parseInt(j)]] });
                this.state.clubs.sort(this.dynamicSort("name")); // we need a spinner to give a couple seconds
              }
            });
        }
  }
  add(){

  }
  handleChange(club){
    if (club != null) {
        this.setState({ club_name: club });
        console.log(`Option selected:`, club);
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-3">
                  <CardBody>
                    <h1>Delete Officer</h1>
                    <Select
                      value={this.state.club_name}
                      onChange={this.handleChange}
                      placeholder="Select a Club Name"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.clubs}
                    />

                    <Button
                      onClick={this.add.bind(this)}
                      color="primary"
                      className="mt-3"
                      active
                    >
                      Delete Officer!
                    </Button>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DeleteOfficer;
