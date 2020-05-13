import React from 'react';
import './App.css';

export default class Certs extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <i>Badges/Certifications</i>
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
    )
  }
}