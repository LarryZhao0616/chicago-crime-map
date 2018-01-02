import React, { Component } from 'react';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Router, Route,Switch } from 'react-router-dom';
import History from './History';
import Header from './Header';
import News from './News';
import Faq from './Faq';
//import TestPage from './TestPage';
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
		  <Route path="/news" component={News}/>
		  <Route path="/faq" component={Faq}/>
		  <Route component={NoMatch}/>
		</Switch>
	      </div>
	    </Router>
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
