import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, NavLink,Switch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	<h1>hello world</h1>
      </div>
    );
  }
}

export default App;
