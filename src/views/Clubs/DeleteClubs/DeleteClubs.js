import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteClubEvent,
  deletedEvent
} from "../../../redux/actions/deleteEventAction";
import Select from "react-select";
import "react-select/dist/react-select.css";
class DeleteClubs extends Component {
  constructor(props) {
    super(props);
    this.handleClubNameChange = this.handleClubNameChange.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.state = {
      selectedOption: null,
      allEvents: [],
      eventName: [],
      clubUrl: "",
      clubName: "",
      deleteClubId: "",
      deleteClubName: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deletingEvents != this.props.deletingEvents) {
      if (nextProps.deletingEvents == "Deleted Event Successfully") {
        alert("deleted event");
        this.props.deletedEvent("False");
        this.props.history.push("/clubs");
        // need it to go someone else to update the list
      }
    }
  }
  componentDidMount() {
    var i = "1";
    for (i = "1"; i < "35"; i++) {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/organizations?page=" +
          i
      )
        .then(res => res.json())
        .then(res => {
          for (var j = "0"; j < "15"; j++) {
            // works
            this.setState({
              allEvents: [...this.state.allEvents, res[parseInt(j)]]
            });
            this.state.allEvents.sort(this.dynamicSort("name")); // we need a spinner to give a couple seconds
          }
        });
    }
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
  deleteEvent() {
    alert(this.state.deleteClubName);
    alert(this.state.deleteClubId);
    this.props.deleteClubEvent(
      this.state.deleteClubName,
      this.state.deleteClubId
    );
  }
  handleClubNameChange(club) {
    if (club != null) {
      this.setState({ clubUrl: club });
      console.log(`Option selected:`, club._url);
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/organizations/" +
          club._url
      )
        .then(res => res.json())
        .then(res => {
          for (var i = 0; i < res.events.length; i++) {
            console.log(res.events[i].id);
            this.setState({
              eventName: [...this.state.eventName, res.events[i]]
            });
            console.log(this.state.eventName);
          }
        });
      this.setState({ deleteClubName: club._url });
    } else {
      this.setState({ clubUrl: club });
    }
  }
  handleEventNameChange(club) {
    if (club != null) {
      this.setState({ clubName: club });
      console.log(`Option selected:`, club);
      alert(club.id);
      this.setState({ deleteClubId: club.id });
    } else {
      this.setState({ clubName: club });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Delete an Event</h1>
                    <Select
                      style={styles.selectt}
                      value={this.state.clubUrl}
                      onChange={this.handleClubNameChange}
                      placeholder="Select a Club Name"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.allEvents}
                    />

                    <Select
                      style={styles.selectt}
                      value={this.state.clubName}
                      onChange={this.handleEventNameChange}
                      placeholder="Select a Event Name to delete"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.eventName}
                    />

                    <Button
                      onClick={this.deleteEvent}
                      color="primary"
                      className="mt-3"
                      active
                    >
                      Delete Event!
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
let styles = {
  time: {
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    width: "auto"
  },
  selectt: {
    display: "flex",
    justifyContent: "center",
    width: "auto"
  }
};
const mapStateToProps = ({ deleteEvent_ID }) => {
  return {
    deletingEvents: deleteEvent_ID.deletingEvents
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { deleteClubEvent, deletedEvent }
  )(DeleteClubs)
);
