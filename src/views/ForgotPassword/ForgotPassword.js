import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {ForgotPassword_action,forgotPasswordReset} from '../../redux/actions/authActions';

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.isValidEmail != this.props.isValidEmail){
      if(nextProps.isValidEmail == 'Check your email for password reset instructions!')
      {
        alert(nextProps.isValidEmail)
        this.props.forgotPasswordReset('Default');
        this.props.history.push('/login');
      }
      if(nextProps.isValidEmail == 'Could not find a user with the provided email'){
        alert(nextProps.isValidEmail)
        this.props.forgotPasswordReset('Default');
      }
    }
  }
  sendVerificationEmail(){
    this.props.ForgotPassword_action(this.state.email);
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
                <Card className="p-3">
                  <CardBody>
                    <h1>Forgot Password</h1>
                    <p className="text-muted">Enter your email and a new password will be sent to your address.</p>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input value = {this.state.email} name="email"type="text" placeholder="Email Address" onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <Button onClick={this.sendVerificationEmail.bind(this)}  style={styles.button} color="primary">Send verification email</Button>
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
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        margin:'auto',
    }
}
const mapStateToProps = ({ auth }) => {
  return {
    isValidEmail : auth.isValidEmail,
  };
};

export default withRouter(connect(mapStateToProps,{ForgotPassword_action,forgotPasswordReset})(ForgotPassword));
