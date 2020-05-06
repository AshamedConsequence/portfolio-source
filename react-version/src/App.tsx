import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <img src="https://avatars2.githubusercontent.com/u/45473363?s=460&u=76fc783175bccafd8c99abdf1d69cb86a6002372&v=4" className="App-logo" alt="logo" loading="lazy" />
        <h2>
          <i>Tarek Ali (DGKSK8LIFE)</i>
        </h2>
        <footer className="frontpage_footer">
          <a href="https://github.com/DGKSK8LIFE/"><img src="icons8-github.svg" className="github"></img></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="mailto:tarekali15@outlook.com"><img src="interface.svg" className="mail"></img></a>
        </footer>
      </header>
    </div>
  );
}

export default App;
