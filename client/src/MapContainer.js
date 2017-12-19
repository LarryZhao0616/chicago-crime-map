import React from 'react';
import {FormGroup, InputGroup, Button, FormControl, Glyphicon, Form} from 'react-bootstrap';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './MapComponent.css';
//import Map from './Map';

export class MapContainer extends React.Component {
    render() {
	if (!this.props.loaded) {
	    return <div>Loading...</div>;
	}

	var google = window.google;

	
	return (
	    <div className="MapContainerOriginal">
	      <Form>
	      <div className="form-group has-feedback has-feedback-left">
		<input type="text" className="form-control"
                       placeholder="Search your school"/>
		<i className="fa fa-search form-control-feedback"></i>
		<Button className="search_button" type="submit">Search</Button>
	      </div>
	      </Form>
	      {/*
	      <div class="inner-addon left-addon">
		<i class="fa fa-search"></i>
		<input type="text" class="form-control" placeholder="Search" />
              </div>
	      */}
	      <div className="MapMap">
		<Map
		  google={this.props.google}
		  zoom={11}
		  zoomControl={true}
		  zoomControlOptions={{position:google.maps.ControlPosition.LEFT_CENTER}}
		  initialCenter={{
		      lat: 41.8789,
		      lng: -87.6359
		  }}
		  >
		</Map>
	      </div>
	    </div>
	);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAoJlSl4IbOSUHqU8cSjmoRfYCAR5vzgeo'
})(MapContainer);
