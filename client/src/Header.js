import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route, NavLink,Switch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import History from './History';
import Footer from './Footer';
//import Header from './Header';
import FontAwesome from 'react-fontawesome';
import './App.css';

class Header extends Component {
  render() {
      return (
	  <Navbar fluid >
	    <Navbar.Header>
	      <Navbar.Brand>
		<a href="/">Map</a>
	      </Navbar.Brand>
	      <Navbar.Toggle/>
	    </Navbar.Header>
	    <Navbar.Collapse>
            <Nav >
	      <LinkContainer to="/news">
                <NavItem>
		  <p>News</p>
                </NavItem>
	      </LinkContainer>
	      <LinkContainer to="/faq">
                <NavItem>
                  <p>FAQ</p>
                </NavItem>
              </LinkContainer>
	    </Nav>
	    </Navbar.Collapse>
	  </Navbar>
      );
  }
}

export default Header;
