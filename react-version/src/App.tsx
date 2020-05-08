import React from 'react';
import Fragment from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav } from 'react-bootstrap';
import { render } from 'react-dom';


export default class App extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        <ul className="list-reset flex">
          <li className="mr-3">
            <a className="inline-block border border-blue rounded py-1 px-3 bg-blue text-white" href="#">Active Pill</a>
          </li>
          <li className="mr-3">
            <a className="inline-block border border-white rounded hover:border-grey-lighter text-blue hover:bg-grey-lighter py-1 px-3" href="#">Pill</a>
          </li>
          <li className="mr-3">
            <a className="inline-block py-1 px-3 text-grey-light cursor-not-allowed" href="#">Disabled Pill</a>
          </li>
        </ul>
        <div className="App">
          <header className="App-header">
            <img src="https://avatars2.githubusercontent.com/u/45473363?s=460&u=76fc783175bccafd8c99abdf1d69cb86a6002372&v=4" className="App-logo" alt="logo" loading="lazy" />
            <h1>
              <i>Tarek Ali (DGKSK8LIFE)</i>
            </h1>
            <footer className="frontpage_footer">
              <a href="https://github.com/DGKSK8LIFE/"><img src="icons8-github.svg" className="github"></img></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="mailto:tarekali15@outlook.com"><img src="interface.svg" className="mail"></img></a>
            </footer>
          </header>
        </div>
      </Fragment>
    )
  }
}


