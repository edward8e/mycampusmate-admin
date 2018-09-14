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

import {editClubInfo,editClub} from '../../../redux/actions/editClubInfoAction';
class EditClubInfo extends Component {
  constructor(props) {
    super(props);
    this.handleClubNameChange = this.handleClubNameChange.bind(this);
    this.editClubInfo = this.editClubInfo.bind(this);

    this.state = {
      club_url : "",
      selectedOption: null,
      clubName: null,
      allEventsName: [], 
      name: "",
      description: [],
      additional_info: [],
      address: "",
      email: "",
      icon_src: "",
      photo_album: "",
      social_urls: [],
      phone_number:"",
      id: "",
      editObject: {
        url: "",
        name: "",
        description: [],
        additional_info: [],
        address: "",
        email: "",
        icon_src: "",
        photo_album: "",
        social_urls: [],
        phone_number:"",
      }
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.editClub != this.props.editClub) {
      if (nextProps.editClub == "Success") {
        alert(nextProps.editClub);
        this.props.editClub("False");
        this.props.history.push("/dashboard");
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
              allEventsName: [...this.state.allEventsName, res[parseInt(j)]]
            });
            this.state.allEventsName.sort(this.dynamicSort("name")); // we need a spinner to give a couple seconds
            
          }
        });
    }
  }
  handleClubNameChange(club) {
    if (club != null) {
        console.log(club)
      this.setState({ clubName: club });
      this.setState({editObject: {...this.state.editObject, url: club._url} })
    }
  }
  updateInput(event) {
    if(event.target.name == "additional_info"){
        this.setState({additional_info: event.target.value.split(",")})
        this.setState({editObject: {...this.state.editObject, [event.target.name]: this.state.additional_info}})
    }
    else if(event.target.name == "description"){
        this.setState({description: event.target.value.split(",")})
        this.setState({editObject: {...this.state.editObject, [event.target.name]: this.state.description}})
    }
    else if(event.target.name == "social_urls"){
        this.setState({social_urls: event.target.value.split(",")})
        this.setState({editObject: {...this.state.editObject, [event.target.name]: this.state.social_urls}})
    }
    else{
    this.setState({ [event.target.name]: event.target.value });
    this.setState({
      editObject: {
        ...this.state.editObject,
        [event.target.name]: event.target.value
      }
    });
    }
  }
  editClubInfo(){
    this.props.editClubInfo(this.state.editObject);
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
                    <h1>Edit club info</h1>
                    <Select
                      value={this.state.clubName}
                      onChange={this.handleClubNameChange}
                      placeholder="Select a Club Name"
                      labelKey="name"
                      valueKey="id"
                      options={this.state.allEventsName}
                     
                    />

                    {this.state.clubName != null && (
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
                                  placeholder="email"
                                  name="email"
                                  value={this.state.email}
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
                                  placeholder="address"
                                  name="address"
                                  value={this.state.address}
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
                                  placeholder="additional info"
                                  name="additional_info"
                                  value={this.state.additional_info}
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
                                  placeholder="icon"
                                  name="icon_src"
                                  value={this.state.icon_src}
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
                                  placeholder="phone number"
                                  name="phone_number"
                                  value={this.state.phone_number}
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
                                  placeholder="photo album"
                                  name="photo_album"
                                  value={this.state.photo_album}
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
                                  name="social_urls"
                                  value={this.state.social_urls}
                                  onChange={this.updateInput.bind(this)}
                                  type="text"
                                  placeholder="social urls"
                                />
                              </InputGroup>
                            </CardBody>
                          </Card>
                        </CardGroup>

                        <Button
                          onClick={this.editClubInfo}
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

const mapStateToProps = ({ editClub }) => {
    return {
        editClubSuccess: editClub.editClubSuccess,
    };
  };
  export default withRouter(
    connect(
      mapStateToProps,
      { editClubInfo,editClub }
    )(EditClubInfo)
  );
  