import React, { Component } from "react";
import { Row, Col, CardGroup, Card, CardBody } from "reactstrap";
import CardWidget from "../../components/Widgets/Widget04";
import API from "../../api";
import { Button } from "antd/lib/radio";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
    this.state = {
      users: [],
      page: '1',
      isLoading:'false',
    };
    window.onscroll = () => {
      const{
        state:{
          error,
          isLoading,
        },
      } = this;
    
    if(isLoading)
    {
      console.log('too early')
    }
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    {
      console.log('reach bottom');
      console.log(this.state.page);
      var current_page = parseInt(this.state.page);
      var current_page = current_page + 1 
      this.setState({page: current_page.toString()})
      this.fetchMore(this.state.page)
    }
    }
  }
  componentDidMount() {
    let page = this.state.page
    fetch(API.ROOT_URL + "organizations?page=" + page)
      .then(response => response.json())
      .then(data => {
        for (var j = "0"; j < "15"; j++) {
        if(data[parseInt(j)].icon_src == null)
        {
          let mydata = {
            "icon_src":"http://www.duralumcarpets.com/sites/default/files/2017-04/user_icon.jpg",
            "id": data[parseInt(j)].id,
            "name": data[parseInt(j)].name,
            "_url": data[parseInt(j)]._url,
          }
          this.setState({ users: [...this.state.users, mydata] });
        }
        else{
          this.setState({ users: [...this.state.users, data[parseInt(j)]] });
        }
        }
        this.setState({isLoading: true})
      });
  }
  fetchMore(page){
    fetch(API.ROOT_URL + "organizations?page=" + page)
      .then(response => response.json())
      .then(data => {
        for (var j = "0"; j < "15"; j++) {
        if(data[parseInt(j)].icon_src == null)
        {
          let mydata = {
            "icon_src":"http://www.duralumcarpets.com/sites/default/files/2017-04/user_icon.jpg",
            "id": data[parseInt(j)].id,
            "name": data[parseInt(j)].name,
            "_url": data[parseInt(j)]._url,
          }
          this.setState({ users: [...this.state.users, mydata] });
        }
        else{
          this.setState({ users: [...this.state.users, data[parseInt(j)]] });
        }
        }
        this.setState({isLoading: true})
      });
  }
  render() {
    let items = this.state.users;
    return (
      <div className="animated fadeIn">
        <h1 className="display-1">Welcome -Name-</h1>
        <Row >
          <Col >
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Row>
                  <ul>
                  {items.map(user => (
                    <div style={styles.div}id="parent" key ={user._url}>
                   
                    <img style={styles.img}key ={user.icon_src} src={user.icon_src}/>
                    <h1  style={styles.text}key={user.id}>
                      {user.name}
                    </h1>
                    </div>
                  ))}
                  </ul>
                  </Row>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
let styles = {
  img: {
      verticalAlign:'middle',
      padding: '10px',
  },
  div:{
     display: 'flex',
    //flexDirection:'row',
  },
  cardBody:{
    width:'2000px',
  },
  text:{
    paddingTop:'85px',
  }
}
export default Dashboard;
