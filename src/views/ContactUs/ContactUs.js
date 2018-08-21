import React, { Component } from "react";
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Dropdown
} from "reactstrap";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      dropdownOpen: false,
      name: "",
      phone: "",
      email: "",
      password: ""
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  submitForm(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("contact-name"));
    console.log(data.get("contact-email"));
    console.log(data.get("contact-phone"));
    console.log(data.get("contact-school"));
    console.log(data.get("contact-club"));
    console.log(data.get("contact-subject"));
    console.log(data.get("contact-message"));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Card>
              <CardHeader>
                <strong>Contact Us Form</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.submitForm}>
                  <FormGroup>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input type="text" id="contact-name" name="contact-name" />
                    <FormText className="help-block">
                      Please enter your name
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      type="email"
                      id="contact-email"
                      name="contact-email"
                      placeholder="email@ucr.edu"
                      autoComplete="email"
                    />
                    <FormText className="help-block">
                      Please enter your email
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input type="tel" id="contact-phone" name="contact-phone" />
                    <FormText className="help-block">
                      Please enter your Phone Number
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="contact-phone">School</Label>
                    <Input
                      type="text"
                      id="contact-school"
                      name="contact-school"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="contact-club">Clubs</Label>
                    <Input type="select" name="contact-club" id="contact-club">
                      <option>SHPE</option>
                      <option>IEEE</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      type="text"
                      id="contact-subject"
                      name="contact-subject"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="contact-message">Message</Label>
                    <Input
                      type="textarea"
                      name="contact-message"
                      id="contact-message"
                    />
                  </FormGroup>

                  <Button type="submit" size="sm" color="primary">
                    <i className="fa fa-dot-circle-o" /> Submit
                  </Button>

                  <Button type="reset" size="sm" color="danger">
                    <i className="fa fa-ban" /> Reset
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactUs;
