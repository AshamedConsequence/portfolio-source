import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Certs extends React.Component<any, any> {
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
                <i>Badges/Certifications</i>
            </h1>
            <br/>
            <div className="card">
                <div className="container">
                    <img src="https://www.awseducate.com/mstudent/resource/Minor_Badge_Icons/BuilderBadgeComplete.png"></img>
                </div>
            </div>
        </header>
      </div>
    )
  }
}