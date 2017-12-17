import React, { Component } from 'react';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route,Switch } from 'react-router-dom';
import History from './History';
import Footer from './Footer';
import Header from './Header';
import TestPage from './TestPage';
import MapContainer from './MapContainer';
import './App.css';

class App extends Component {
  render() {
      return (
	  <div className="site">
	  <Router history = {History}>
	    <div className="site-content">
	      <Header/>
	      <Switch>
		<Route exact path="/" component={MapContainer} />
		<Route path="/news" component={TestPage}/>
		<Route path="/faq" component={TestPage}/>
		<Route component={NoMatch}/>
		</Switch>
	    </div>
	    </Router>
	  <Footer/>
	</div>
    );
  }
}

const NoMatch = ({ location }) => (
        <div>
        <h3>No match for <code>{location.pathname}</code></h3>
        </div>
);
export default App;
