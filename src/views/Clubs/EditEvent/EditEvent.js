import React, { Component, Text } from "react";
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
import Select from "react-select";
import "react-select/dist/react-select.css";
import DatePicker from "react-datepicker";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "react-day-picker/lib/style.css";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import TimePicker from "rc-time-picker";
const format = "h:mm a";
const now = moment()
  .hour(0)
  .minute(0);
import {
  fetchEditAPI,
  editEventSuccess,
  editEventError
} from "../../../redux/actions/editEventActions";
import API from '../../../api';

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.handleStartDayClick = this.handleStartDayClick.bind(this);
    this.handleStartTimePick = this.handleStartTimePick.bind(this);
    this.handleEndDayClick = this.handleEndDayClick.bind(this);
    this.handleEndTimePick = this.handleEndTimePick.bind(this);
    this.handleClubNameChange = this.handleClubNameChange.bind(this);
    this.handleClubEventChange = this.handleClubEventChange.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.state = {
      selectedOption: null,
      allEvents: [],
      allEventsName: [],
      start_selectedDay: "",
      end_selectedDay: "",
      start_time: "",
      end_time: "",
      clubUrl: "",
      clubInfo: null,
      start_time: "",
      end_time: "",
      test: "",
      name: "",
      description: "",
      dayoftheweek: "",
      starttime: "",
      endtime: "",
      largeimg: "",
      medimg: "",
      location: "",
      id: "",
      editObject: {
        id: "",
        name: "",
        description: "",
        dayoftheweek: "",
        starttime: "",
        endtime: "",
        largeimg: "",
        medimg: "",
        location: ""
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editSuccess != this.props.editSuccess) {
      if (nextProps.editSuccess == "Success") {
        alert(nextProps.editSuccess);
        this.props.editEventSuccess("False");
        this.props.history.push("/dashboard");
      }
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
  componentDidMount() {
    var i = "1";
    for (i = "1"; i < "35"; i++) {
      fetch(
        API.ROOT_URL + "organizations?page=" +
          i
      )
        .then(res => res.json())
        .then(res => {
          for (var j = "0"; j < "15"; j++) {
            // works
            this.setState({
              allEventsName: [...this.state.allEventsName, res[parseInt(j)]]
            });
            this.state.allEventsName.sort(this.dynamicSort("name")); // we need a spinner to give a couple seconds
          }
        });
    }
  }
  handleStartDayClick(day) {
    this.setState({ start_selectedDay: day });
  }
  handleStartTimePick(value) {
    this.setState({ start_time: value.format(format) });
    var day_start = moment(this.state.start_selectedDay).format("YYYY-MM-DD");
    var time_start = moment(this.state.start_time, ["h:mm A"]).format("HH:mm");
    var startTime = day_start + " " + time_start + ":00.000000";
    this.setState({
      editObject: { ...this.state.editObject, starttime: startTime }
    });
  }
  handleEndDayClick(day) {
    this.setState({ end_selectedDay: day });
  }
  handleEndTimePick(value) {
    this.setState({ end_time: value.format(format) });
    var day_end = moment(this.state.end_selectedDay).format("YYYY-MM-DD");
    var time_end = moment(this.state.end_time, ["h:mm A"]).format("HH:mm");
    var endTime = day_end + " " + time_end + ":00.000000";
    this.setState({
      editObject: { ...this.state.editObject, endtime: endTime }
    });
  }
  handleClubNameChange(club) {
    if (club != null) {
      this.setState({ clubUrl: club });
      console.log(`Option selected:`, club._url);
      fetch(
        API.ROOT_URL + "organizations/" +
          club._url +
          "/events"
      )
        .then(res => res.json())
        .then(res => {
          if (res.length == 0) {
            console.log("Hello");
            this.setState({ allEvents: res });
            this.setState({ clubInfo: null });
          } else {
            for (var i = 0; i < res.length; i++) {
              this.setState({ allEvents: [...this.state.allEvents, res[i]] });
            }
          }
        });
    }
  }
  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({
      editObject: {
        ...this.state.editObject,
        [event.target.name]: event.target.value
      }
    });
  }
  handleClubEventChange(club) {
    if (club != null) {
      this.setState({ clubInfo: club });
      this.setState({ editObject: { ...this.state.editObject, id: club.id } });
    }
  }
  editEvent() {
    console.log(this.state.editObject);
    this.props.fetchEditAPI(this.state.editObject);
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
                    <h1>Edit an Event</h1>
                    <Select
                      value={this.state.clubUrl}
                      onChange={this.handleClubNameChange}
                      placeholder="Select a Club Name"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.allEventsName}
                    />

                    <Select
                      value={this.state.clubInfo}
                      onChange={this.handleClubEventChange}
                      placeholder="Select a Club Event to edit"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.allEvents}
                    />

                    {this.state.clubInfo != null && (
                      <div>
                        <CardGroup>
                          <Card className="p-4">
                            <CardBody>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder="name"
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.updateInput.bind(this)}
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder="description"
                                  name="description"
                                  value={this.state.description}
                                  onChange={this.updateInput.bind(this)}
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder="day of the week"
                                  name="dayoftheweek"
                                  value={this.state.dayoftheweek}
                                  onChange={this.updateInput.bind(this)}
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i>Start time</i>
                                  </span>
                                </div>
                                <DayPickerInput
                                  onDayChange={this.handleStartDayClick}
                                />
                                <TimePicker
                                  showSecond={false}
                                  defaultValue={now}
                                  className="xxx"
                                  onChange={this.handleStartTimePick}
                                  format={format}
                                  use12Hours
                                  inputReadOnly
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i>End time</i>
                                  </span>
                                </div>
                                <DayPickerInput
                                  onDayChange={this.handleEndDayClick}
                                />
                                <TimePicker
                                  showSecond={false}
                                  defaultValue={now}
                                  className="xxx"
                                  onChange={this.handleEndTimePick}
                                  format={format}
                                  use12Hours
                                  inputReadOnly
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder="img large src"
                                  name="largeimg"
                                  value={this.state.largeimg}
                                  onChange={this.updateInput.bind(this)}
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  type="text"
                                  placeholder="img med src"
                                  name="medimg"
                                  value={this.state.medimg}
                                  onChange={this.updateInput.bind(this)}
                                />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="icon-user" />
                                  </span>
                                </div>
                                <Input
                                  name="location"
                                  value={this.state.location}
                                  onChange={this.updateInput.bind(this)}
                                  type="text"
                                  placeholder="location"
                                />
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </CardGroup>

                        <Button
                          onClick={this.editEvent}
                          color="primary"
                          className="mt-3"
                          active
                        >
                          Edit Event!
                        </Button>
                      </div>
                    )}
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

const mapStateToProps = ({ editEvent }) => {
  return {
    editSuccess: editEvent.editSuccess,
    errorEdit: editEvent.errorEdit
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchEditAPI, editEventSuccess, editEventError }
  )(EditEvent)
);
