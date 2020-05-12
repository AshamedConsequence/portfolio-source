import React from 'react';
import './App.css';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://avatars2.githubusercontent.com/u/45473363?s=460&u=76fc783175bccafd8c99abdf1d69cb86a6002372&v=4" className="App-logo" alt="logo" loading="lazy" />
          <h1>
            <i>Tarek Ali (DGKSK8LIFE)</i>
          </h1>
          <p>I'm very interested in <strong>server-side</strong> development and <strong>webservices/relational datastructures/informational security</strong>. I know
            <strong>go</strong>, <strong>js</strong>, <strong>python</strong>, <strong>java</strong>, and
            <strong>html/css</strong>.
            I've also
            written a few hundred
            lines of <strong>C/C++</strong>. I enjoy Vex and FRC Robotics (I'm on team <strong>6785M and 5829</strong>).
            I'm 14;
            currently living in Houston, TX. For more information, <a
                href='https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md'>Click Here.</a> I am a native English speaker, and am fluent/semi-fluent in French. Arabic is 
                my third language; I can read and write it in but definitely need some improvement. I am also learning Russian (self-taught).</p>
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


