import React from 'react';
import './App.css';

export default class Knowledge extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <i>Knowledge</i>
          </h1>
          <div className="Knowledge-headers">
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