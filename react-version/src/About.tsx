import React from 'react';
import './App.css';

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <i>About</i>
          </h1>
            <p className="about-block">I'm very interested in <strong>server-side</strong> development and <strong>webservices/relational datastructures/informational security</strong>. I know 
             <strong> go</strong>, <strong>js</strong>, <strong>python</strong>, <strong>java</strong>, and
            <strong> html/css</strong>.
            I've also
            written a few hundred
            lines of <strong>C/C++</strong>. I enjoy Vex and FRC Robotics (I'm on team <strong>6785M and 5829</strong>).
            I'm 14;
            currently living in Houston, TX. For more information about my computer science knowledge, <a
                href='https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md' className="wiknwintl">Click Here.</a> I am a native English speaker, and am fluent/semi-fluent in French. Arabic is 
                my third language; I am literate in it but definitely need some improvement. I am also learning Russian (self-taught).</p>
        </header>
      </div>
    )
  }
}