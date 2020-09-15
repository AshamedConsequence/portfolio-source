import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class App extends React.Component<any, any> {
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
          <img
            src="https://avatars2.githubusercontent.com/u/45473363?s=460&u=76fc783175bccafd8c99abdf1d69cb86a6002372&v=4"
            className="App-logo"
            alt="logo"
            loading="lazy"
          />
          <br></br>
          <h1>
            <i>Tarek Ali (DGKSK8LIFE)</i>
          </h1>
          <footer className="frontpage_footer">
            <a href="https://github.com/DGKSK8LIFE/">
              <img src="icons8-github.svg" className="github"></img>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="mailto:tarekali15@outlook.com">
              <img src="interface.svg" className="mail"></img>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href="https://twitter.com/TarekAl62101525">
              <img src="twitter.svg" className="twitter"></img>
            </a>
          </footer>
        </header>
      </div>
    );
  }
}
