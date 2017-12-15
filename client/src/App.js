import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, NavLink,Switch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import History from './History';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import './App.css';

class App extends Component {
  render() {
    return (
	<div className="site">
	  <Router history = {History}>
	    <div className="site-content">
	      <Navbar fluid >
		<Navbar.Header>
		  <Navbar.Brand>
		    <a href="/">Map</a>
		  </Navbar.Brand>
		</Navbar.Header>
                  <Nav >
                    <NavItem>
		      <p>News</p>
                    </NavItem>
		    <LinkContainer to="/faq">
                    <NavItem>
                      <p>FAQ</p>
                    </NavItem>
                  </LinkContainer>
		  </Nav>
	      </Navbar>
	    </div>
	    </Router>
	  <Footer/>
	</div>
    );
  }
}

export default App;
