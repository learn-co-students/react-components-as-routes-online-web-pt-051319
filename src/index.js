import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from "./About.js"
import Home from "./Home.js"
import Login from "./Login.js"
import Navbar from "./Navbar.js"

ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </divt>
  </Router>),
  document.getElementById('root')
);