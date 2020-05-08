import React from 'react';
import Fragment from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav } from 'react-bootstrap';
import { render } from 'react-dom';
import NavBar from './Nav';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <img src="https://avatars2.githubusercontent.com/u/45473363?s=460&u=76fc783175bccafd8c99abdf1d69cb86a6002372&v=4" className="App-logo" alt="logo" loading="lazy" />
            <h2>
              <i>Tarek Ali (DGKSK8LIFE)</i>
            </h2>
            <footer className="frontpage_footer">
              <a href="https://github.com/DGKSK8LIFE/"><img src="icons8-github.svg" className="github"></img></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="mailto:tarekali15@outlook.com"><img src="interface.svg" className="mail"></img></a>
            </footer>
          </header>
        </div>
      </Fragment >
    )
  }
}


