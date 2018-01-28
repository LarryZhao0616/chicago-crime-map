import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './MapComponent.css';
import ParseCrimeDocument from './ParseCrimeData';
import Marker from './MapMarker';
import axios from 'axios';

export class MapContainer extends React.Component {
    constructor(props){
	super(props);
	this.state={
	    whole_crime_data:[],
	    google:{}
	};
	this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty(arr){
	return arr.length === 0 && arr.constructor === Array;
    }
    
    componentWillMount(){
	if(this.isEmpty(this.state.whole_crime_data)){
	    axios.get('/crime/')
		.then(res => res.data)
		.then(whole_crime_data => ParseCrimeDocument(whole_crime_data))
		.then(whole_crime_data => this.setState({ whole_crime_data }))
		.catch(e=>{
		    console.log(e);
		});
	}
    }


    componentDidUpdate(){
//        console.log("didupdate:",this.props.google);

    }
    
    render() {
	if (!this.props.loaded) {
	    return <div>Loading...</div>;
	}

	const google = window.google;
	const crimedata = this.state.whole_crime_data;
	

	
	return (
	    <div className="MapContainerOriginal">
	      <Form className="search_form">
		<div className="form-group has-feedback has-feedback-left">
		  <input type="text" className="form-control"
			 placeholder="Search your school"/>
		  <i className="fa fa-search form-control-feedback"></i>
		  <Button className="search_button" bsStyle="info" type="submit">Search</Button>
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
		  {crimedata.map(crime => <Marker position={crime.pos} key={crime.id} />)}
		</Map>
	      </div>
	    </div>
	);
    }
}

MapContainer.propTypes = {
};

MapContainer.defaultProps = {
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAoJlSl4IbOSUHqU8cSjmoRfYCAR5vzgeo'
})(MapContainer);
