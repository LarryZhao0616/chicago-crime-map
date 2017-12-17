import React from 'react';
import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';
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
	      <div className="MapSearch">
		<FormGroup>
		  <InputGroup >
		    <FormControl type="text" />
		    <InputGroup.Button>
                      <Button className="search_button">Search</Button>
                    </InputGroup.Button>
		  </InputGroup>
		</FormGroup>
	      </div>
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
