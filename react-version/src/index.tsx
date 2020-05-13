import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import About from './About';
import Certs from './Certs';

ReactDOM.render (
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
          <App />
      </Route>
      <Route exact path="/about">
          <About />
      </Route>
      <Route exact path="/certs">
          <Certs />
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
