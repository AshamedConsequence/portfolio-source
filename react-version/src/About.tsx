import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

let year = new Date();
let age: number = year.getFullYear() - 2006; // 2005 is my actual birthyear but there's always an offset when you're born in December

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-light navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-item nav-link" to="/about">
                  About Me
                </Link>
                <Link className="nav-item nav-link" to="/knowledge">
                  My Knowledge
                </Link>
                <Link className="nav-item nav-link" to="/certs">
                  Badges/Certifications
                </Link>
              </div>
            </div>
          </nav>
          <h1>
            <i>About</i>
          </h1>
          <p className="about-block">
            I'm very interested in{" "}
            <strong>
              server-side development, webservices, relational datastructures,
              informational security, devops, and more!
            </strong>
            . I participate in Vex and FRC Robotics (team{" "}
            <strong>6785M and 5829</strong>). I love creating and contributing
            to open source software; if you need any help or a contributor, hit
            me up. I'm {age}; currently living in Houston, TX. For more
            information about my computer science knowledge,{" "}
            <a
              href="https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md"
              className="wiknwintl"
            >
              Click Here.
            </a>{" "}
            I am a native English speaker, and am fluent in French. Arabic is my
            third language; I am literate in it but definitely need some
            improvement. I am also learning Russian (self-taught).
          </p>
        </header>
      </div>
    );
  }
}
