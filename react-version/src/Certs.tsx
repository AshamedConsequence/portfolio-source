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