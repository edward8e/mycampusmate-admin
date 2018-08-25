import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import { withRouter } from 'react-router-dom'


class Register extends Component {

  login(){
    this.props.history.push('/');
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
                    <h1>Create an Account</h1>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="Email"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="Name"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input type="password" placeholder="Password"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input type="password" placeholder="Confirm Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button style={styles.button} onClick={this.login.bind(this)} color="primary" className="px-4">Register</Button>
                      </Col>
                    </Row>
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
    button: {
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        width:'auto',
    }
}
export default withRouter(Register);
