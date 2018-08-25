import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {checkAuth,authReset} from '../../redux/actions/authActions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.isAuthenticated != this.props.isAuthenticated){
      if(nextProps.isAuthenticated == 'Wrong password')
      {
        alert(nextProps.isAuthenticated)
        this.props.authReset('Fetching')
      }
      if(nextProps.isAuthenticated == 'Confirm email')
      {
        alert(nextProps.isAuthenticated)
        this.props.authReset('Fetching')
      }
      if(nextProps.isAuthenticated == 'Success')
      {
        alert(nextProps.isAuthenticated)
        this.props.authReset('Fetching')
        this.props.history.push('/dashboard');
      }
    }
  }
  register(){
    this.props.history.push('/register');
  }
  login(){
    this.props.checkAuth(this.state.email,this.state.password);
    alert(this.props.isAuthenticated);
    //alert(this.state.email)
    //alert(this.state.password)
  }
  forgotpassword(){
    this.props.history.push('/forgotpassword');
  }
  updateInput(event){
    this.setState({ [event.target.name]: event.target.value });
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
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input value = {this.state.email} name="email" type="text" placeholder="Email" onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input value = {this.state.password} name="password" type="password" onChange = {this.updateInput.bind(this)} placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button onClick={this.login.bind(this)} color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button onClick={this.forgotpassword.bind(this)} color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button onClick={this.register.bind(this)} color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
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

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated : auth.isAuthenticated,
    fetching: auth.fetching,
  };
};

export default withRouter(connect(mapStateToProps,{authReset,checkAuth})(Login));

