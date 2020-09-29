import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "./utils/NavBar";

export default class Knowledge extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1>
            <i>Knowledge</i>
          </h1>
          <div className="Knowledge-headers">
            <a
              className="wiknwintl"
              href="https://github.com/DGKSK8LIFE/WIKNWINTL"
            >
              <p>For more info, click here.</p>
            </a>
            <h3>Backend</h3>
            <ul>
              <li>Go</li>
              <li>Python</li>
              <li>Node/Typescript</li>
              <li>Java</li>
              <li>Flask</li>
              <li>Revel framework</li>
              <li>Gin</li>
              <li>Express.JS</li>
              <li>C</li>
              <li>GraphQL</li>
              <li>REST</li>
              <li>JWT</li>
              <li>Session Auth</li>
              <li>C#</li>
              <li>System Design</li>
            </ul>
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript/Typescript</li>
              <li>React</li>
              <li>Next.JS</li>
              <li>Wordpress</li>
              <li>Scss</li>
              <li>Bootstrap</li>
              <li>React-Native</li>
            </ul>
            <h3>Database technologies</h3>
            <ul>
              <li>MySQL</li>
              <li>Sqlite</li>
              <li>Redis</li>
              <li>MongoDB</li>
            </ul>
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>Docker-Compose</li>
              <li>Bash</li>
              <li>Linux</li>
              <li>Github Actions</li>
              <li>Git/Github</li>
            </ul>
            <h3>Cloud</h3>
            <ul>
              <li>GCP</li>
              <li>Netlify</li>
            </ul>
            <h3>Hardware</h3>
            <ul>
              <li>RaspberryPI</li>
              <li>Arduino</li>
              <li>Sunfounder Sensor Kit</li>
              <li>Computer Hardware</li>
              <li>Building PC</li>
            </ul>
            <h3>Cybersecurity</h3>
            <ul>
              <li>TryHackMe!</li>
              <li>Nmap</li>
              <li>Wireshark</li>
              <li>Malduino</li>
              <li>InfoSec</li>
            </ul>
            <h3>Data Science</h3>
            <ul>
              <li>Keras/Tensorflow</li>
              <li>Numpy</li>
              <li>CSV</li>
              <li>Matplotlib</li>
            </ul>
            <h3>Other software</h3>
            <ul>
              <li>Office 365 Suite</li>
              <li>Adobe Creative Cloud Suite</li>
              <li>Unity Game Engine</li>
              <li>Blender</li>
              <li>OnShape</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
