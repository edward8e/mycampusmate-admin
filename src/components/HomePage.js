import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron,
  Button,
  Container
} from "reactstrap";

import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Carousel from "./Carousel";

import richard from "../assets/profile/richard.jpg";
import edward from "../assets/profile/edward.jpg";
import jorge from "../assets/profile/jorge.jpg";
import dylan from "../assets/profile/dylan.jpeg";
import michalis from "../assets/profile/michalis.jpg";

import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />

          {/* Header Section */}

          <Jumbotron className="dark-header">
            <div className="container">
              <div className="header-content" />
              <div className="row">
                <div className="col-sm-6 header-content-details">
                  <h3 className="pr-5 mr-5 pb-2 header-brand">
                    <span className="gold header-brand">RMate </span>
                    is your One-Stop-Shop for student success
                  </h3>

                  <p className="download-buttons">
                    <a href="https://itunes.apple.com/app/id1418361482">
                      <img
                        src="https://www.kingstudio.ro/demos/theone/images/app-store.png"
                        alt="app-store"
                        className="app-store mx-auto"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mycampusmate.rmate">
                      <img
                        src="https://edward8e.github.io/Rmate_site/img/google-play-badge.svg"
                        alt="play-store"
                        className="app-store"
                      />
                    </a>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="header-image">
                    <img
                      src="https://i.imgur.com/z1Wg2JD.png"
                      alt=""
                      className="app-picture mx-auto d-block img-fluid pr-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>

        {/* Highlights Section */}

        <section id="highlights" className="pt-0">
          <div className="container-fluid">
            {/* <div className="page-header text-center">
              <h2>Highlights</h2>
            </div> */}
            <div className="row">

              <div className="col-md-3 bg-dark">
                <div className="promo-box text-center inner-space-2x">
                  <h5 className="text-white">Student Onboarding</h5>
                  <p className="text-white">Student success starts by engaging and connecting with students on their terms.</p>
                </div>
              </div>

              <div className="col-md-3 bg-light">
                <div className="promo-box text-center inner-space-2x">
                  <h5 className="text-white">Student Retention</h5>
                  <p className="text-white">Among public institutions, only 64% of freshmen return for their sophomore year.</p>
                </div>
              </div>

              <div className="col-md-3 bg-dark">
                <div className="promo-box text-center inner-space-2x">
                  <h5 className="text-white">Degree Completion</h5>
                  <p className="text-white">Only 59% of undergraduate students at 4-year institutions graduate in 6 years.</p>
                </div>
              </div>

              <div className="col-md-3 bg-light">
                <div className="promo-box text-center inner-space-2x">
                  <h5 className="text-white">Lifelong Relationships</h5>
                  <p className="text-white">Universities yearn to build lifelong relationships beginning with prospective students through alumni</p>
                </div>
              </div>
               

            </div>
          </div>
        </section>

        {/* Audience Section */}

        <section id="how" className="style-2">
          <div className="container">
            <div className="page-header text-center">
              <h2>Audience</h2>
            </div>
            <div className="row">
              <div className="col-sm-3 hiw">
                <div className="how block">
                  <div className="how-icon">
                    {/* <span className="step-badge rounded">1</span> */}
                    <i className="fa fa-sign-in rounded" />
                  </div>
                  <h4 className="text-center">Incoming Students</h4>
                </div>
              </div>

              <div className="col-sm-3 hiw">
                <div className="how block">
                  <div className="how-icon">
                    {/* <span className="step-badge rounded">2</span> */}
                    <i className="fa fa-download rounded" />
                  </div>
                  <h4>Current Students</h4>
                </div>
              </div>

              <div className="col-sm-3 hiw">
                <div className="how block">
                  <div className="how-icon">
                    {/* <span className="step-badge rounded">3</span> */}
                    <i className="fa fa-exchange rounded" />
                  </div>
                  <h4>Transfer Students</h4>
                </div>
              </div>

              <div className="col-sm-3 hiw">
                <div className="how block">
                  <div className="how-icon">
                    {/* <span className="step-badge rounded">4</span> */}
                    <i className="fa fa-plane rounded" />
                  </div>
                  <h4>International Students</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}

        <section id="cta" className="parallax dark-bg">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title text-white">This App is Awesome</h2>
              <p className="text-sm cta-description text-white">
                “This is perfect for me. I am transferring to UCR in the fall...”- Joshua D.
              </p>
              {/* <p className="cta-info">Download the App Now from:</p> */}
            </div>
          </div>
        </section>

        <section id="more-features" className="centered-features fluid">
          <div className="container">
            <div className="page-header text-center">
              <h2>App Features</h2>
            </div>
            <div className="row">
              <div className="col-md-4 feature-left">
                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-compass rounded" />
                  </div>
                  <h5>Classroom Navigation</h5>
                  <p>
                    Get directions from anywhere right to your classroom door!
                    No more getting lost getting around UCR!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-book rounded" />
                  </div>
                  <h5>Class Schedule Management</h5>
                  <p>
                    Keep track of your classes all in one easy to access place!
                    Once your classes schedule is in the app, it makes
                    navigating to them easier!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa fa-mouse-pointer rounded" />
                  </div>
                  <h5>UCR Points-of-Interest</h5>
                  <p>
                    Quickly find any UCR Point-of-Interest at your convience
                    like Scotty's Market, Libraries, Food Courts, Coffee Shops,
                    Bike Racks, and more!
                  </p>
                </div>
              </div>

              <div className="col-md-4 center-feature-image">
                <img
                  src="https://i.imgur.com/zILUpf8.jpg"
                  alt=""
                  className="feature-picture"
                />{" "}
              </div>

              <div className="col-md-4 feature-right">
                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-calendar rounded" />
                  </div>
                  <h5>School Events</h5>
                  <p>
                    Never miss another school event with up to date info on
                    Student Development Workshops, ASUCR Events/Concerts, and
                    Undergraduate Reasearch Opportunites!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-book rounded" />
                  </div>
                  <h5>School Clubs</h5>
                  <p>
                    Always be up to date with all your school clubs! Never miss
                    a club event again!
                  </p>
                </div>

                <div className="feature block">
                  <div className="feature-icon">
                    <i className="fa fa-registered rounded" />
                  </div>
                  <h5>R Coin</h5>
                  <p>
                    Explore around campus to earn R-Coins! Use them to customize
                    your student experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        {/* //Club organization, email us */}
        <section id="newsletter" className="club">
          <div className="container">
            <div className="page-header text-center">
              <h2 className="text-white">
                Request Access for a{" "}
                <span className="gold">Club Organization</span>
              </h2>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Your Email Here..."
              />
              <span className="input-group-btn">
                <Button
                  className="btn btn-md btn-primary-filled btn-left btn-newsletter btn-rounded"
                  color="yellow"
                >
                  <i className="fa fa-sign-in pr-2" />
                  <span>Request</span>
                </Button>{" "}
              </span>
            </div>
          </div>
        </section>

        <footer className="color-footer">
          <div className="container">
            <p className="footer-info">
              © 2018 - <strong>MyCampusMate</strong> - All Rights Reserved
              <span className="social pull-right">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
