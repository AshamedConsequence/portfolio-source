import React from "react";
import "./App.css";
import NavBar from "./utils/NavBar";

let year = new Date();
let age: number = year.getFullYear() - 2006; // 2005 is my actual birthyear but there's always an offset when you're born in December

export default function About() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1>
            <i>About</i>
          </h1>
          <p className="about-block">
            I'm very interested in{" "}
            <strong>
              server-side development, webservices, relational datastructures,
              informational security, devops, and more!
            </strong>
            . I participate in Vex and FRC Robotics (team{" "}
            <strong>6785M and 5829</strong>). I love creating and contributing
            to open source software; if you need any help or a contributor, hit
            me up. I'm {age}; currently living in Houston, TX. For more
            information about my computer science knowledge,{" "}
            <a
              href="https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md"
              className="wiknwintl"
            >
              Click Here.
            </a>{" "}
            I am a native English speaker, and am fluent in French. Arabic is my
            third language; I am literate in it but definitely need some
            improvement. I am also learning Russian (self-taught).
          </p>
        </header>
      </div>
    );
  }
