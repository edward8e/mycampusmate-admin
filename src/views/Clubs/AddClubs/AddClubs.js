import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {addClubEvent} from '../../../redux/actions/addEventActions';
import {addedEvents} from '../../../redux/actions/addEventActions';

import DatePicker from 'react-datepicker';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'react-day-picker/lib/style.css';
//import { TimePicker } from 'react-md';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);
class AddClubs extends Component {
   
    constructor(props){
        super(props);
        this.handleStartDayClick = this.handleStartDayClick.bind(this);
        this.handleStartTimePick = this.handleStartTimePick.bind(this);
        this.handleEndDayClick = this.handleEndDayClick.bind(this);
        this.handleEndTimePick = this.handleEndTimePick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          selectedOption: null,
          events : [],
          club_name: null,
          start_selectedDay: '',
          end_selectedDay: '',
          start_time:'',
          end_time:'',
          test:'',
          name: '',
          description: '',
          dayoftheweek:'',
          starttime:'',
          endtime:'',
          largeimg:'',
          medimg:'',
          location:'',
          Object1:{
            club_name:'',
            name: '',
            description: '',
            dayoftheweek:'',
            starttime:'',
            endtime:'',
            largeimg:'',
            medimg:'',
            location:'',
          }
        };
      }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.addingEvents != this.props.addingEvents){
            if(nextProps.addingEvents =='added Events Successfully')
            {
                alert(nextProps.addingEvents)
                this.props.addedEvents('False')
                this.props.history.push('/dashboard')
            }
        }
    }
    componentDidMount(){
        var i = "1";
        for(i = "1"; i<"35"; i++)
        {
        fetch("https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/organizations?page=" + i).then(res => res.json())
        .then(res => {
            for(var j = "0"; j<"15"; j++ )
            {
                // works
                this.setState({ events: [...this.state.events,res[parseInt(j)]]});
                this.state.events.sort(this.dynamicSort("name"))  // we need a spinner to give a couple seconds
            }
            
        });
    }   
}

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
     }
   }
    handleStartDayClick(day) {
        this.setState({ start_selectedDay: day});
      }
    handleStartTimePick(value) {
        this.setState({start_time: value.format(format)});
        var day_start= moment(this.state.start_selectedDay).format('YYYY-MM-DD');
        var time_start =  moment(this.state.start_time,["h:mm A"]).format("HH:mm");
        var startTime = day_start + " " + time_start + ":00.000000";
        this.setState({ Object1: { ...this.state.Object1,starttime: startTime}});

    }
    handleEndDayClick(day) {
        this.setState({ end_selectedDay: day });
      }
    handleEndTimePick(value) {
        this.setState({end_time: value.format(format)});
        var day_end = moment(this.state.end_selectedDay).format('YYYY-MM-DD');
        var time_end =  moment(this.state.end_time,["h:mm A"]).format("HH:mm");
        var endTime = day_end + " " + time_end + ":00.000000";
        this.setState({ Object1: { ...this.state.Object1,endtime: endTime}});

    }

    updateInput(event){
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ Object1: { ...this.state.Object1,[event.target.name]: event.target.value}});
    }
    add(){
        console.log(this.state.Object1)
        this.props.addClubEvent(this.state.Object1)
    }
    handleChange(club){
        if(club != null){
            this.setState({club_name:club });
            console.log(`Option selected:`, club);
            this.setState({ Object1: { ...this.state.Object1,club_name: club._url}});
        }
        else{
            this.setState({club_name:club});
        }
      }
    
  render() {
   // const { selectedOption } = this.state;
    
    return (
        <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Add Event</h1>
                    <Select style={styles.selectt}
                    value={this.state.club_name}
                    onChange={this.handleChange}
                    placeholder = "Select a Club Name"
                    labelKey= 'name'
                    valueKey = 'id'
                    options = {this.state.events}/>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="name" name="name" value = {this.state.name} onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="description" name="description" value = {this.state.description} onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="day of the week" name="dayoftheweek" value = {this.state.dayoftheweek} onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>Start time</i>
                        </span>
                      </div>
                      <DayPickerInput style= {styles.time} onDayChange={this.handleStartDayClick} />
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
                      <DayPickerInput style= {styles.time} onDayChange={this.handleEndDayClick} />
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
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="img large src" name="largeimg" value = {this.state.largeimg} onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="img med src" name="medimg" value = {this.state.medimg} onChange = {this.updateInput.bind(this)}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input name="location" value = {this.state.location} onChange = {this.updateInput.bind(this)} type="text" placeholder="location"/>
                    </InputGroup>
                    <Button onClick={this.add.bind(this)} color="primary" className="mt-3" active>Add Event!</Button>
                    </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
let styles = {
    time: {
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        width:'auto',
    },
    selectt:{
        display: 'flex',
        justifyContent: 'center',
        width:'auto',
    }
}
const mapStateToProps = ({ addEvent }) => {
    return {
        addingEvents : addEvent.addingEvents
    };
  };
export default withRouter(connect(mapStateToProps,{addClubEvent,addedEvents})(AddClubs));
  
  