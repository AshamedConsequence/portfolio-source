import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Knowledge extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-light navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/about">About Me</Link>
      <Link className="nav-item nav-link" to="/knowledge">My Knowledge</Link>
      <Link className="nav-item nav-link" to="/certs">Badges/Certifications</Link>
    </div>
  </div>
        </nav>
          <h1>
            <i>Knowledge</i>
          </h1>
          <div className="Knowledge-headers">
          <a className="wiknwintl" href="https://github.com/DGKSK8LIFE/WIKNWINTL"><p>For more info, click here.</p></a>
            <h3>Backend</h3>
            <ul>
              <li>Go</li> 
              <li>Python</li>
              <li>Node</li>
              <li>Java</li>
              <li>Flask</li>
              <li>Gin router</li>
              <li>Revel framework</li>
            </ul>
            <h3>Frontend</h3>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>Javascript/Typescript</li>
              <li>React</li>
            </ul>
            <h3>Database technologies</h3>
            <ul>
              <li>MySQL</li>
              <li>Sqlite</li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}