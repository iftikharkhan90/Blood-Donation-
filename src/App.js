import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Navbarr from './navbar.js';


import Footer from './Footer.js';

import Routerrs from './Routers.js';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbarr /> */}
        <Routerrs />
        <Footer />
      </div>
    );
  }
}

export default App;
