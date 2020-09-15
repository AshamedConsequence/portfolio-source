import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "./utils/NavBar";

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
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
