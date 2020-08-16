import React from 'react';
import './App.css';

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-light navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/about">About Me</a>
      <a className="nav-item nav-link" href="/knowledge">My Knowledge</a>
      <a className="nav-item nav-link" href="/certs">Badges/Certifications</a>
    </div>
  </div>
        </nav>
          <h1>
            <i>About</i>
          </h1>
            <p className="about-block">I'm very interested in <strong>server-side development, webservices, relational datastructures, informational security, and more!</strong>. I know 
             <strong> go</strong>, <strong>js</strong>, <strong>python</strong>, <strong>java </strong>
            <strong>html/css</strong>, and <strong>C</strong>.
            I've also written some
            <strong> C++</strong>. I participate in Vex and FRC Robotics (team <strong>6785M and 5829</strong>).
            I'm 14;
            currently living in Houston, TX. For more information about my computer science knowledge, <a
                href='https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md' className="wiknwintl">Click Here.</a> I am a native English speaker, and am fluent in French. Arabic is 
                my third language; I am literate in it but definitely need some improvement. I am also learning Russian (self-taught).</p>
        </header>
      </div>
    )
  }
}