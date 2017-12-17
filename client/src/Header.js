import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { Router, Route, NavLink,Switch } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
//import History from './History';
import './App.css';

class Header extends Component {
  render() {
      return (
	  <div>
	    <Navbar inverse fluid>
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
	  </div>
      );
  }

}



export default Header;
