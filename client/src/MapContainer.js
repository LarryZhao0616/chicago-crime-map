import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './MapComponent.css';
//import Map from './Map';
import axios from 'axios';

export class MapContainer extends React.Component {
    constructor(props){
	super(props);
	this.state={
	    whole_crime_data:{},
	    google:{}
	};
	this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty(obj){
	return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    
    componentWillMount(){
	if(this.isEmpty(this.state.whole_crime_data)){
	    axios.get('/crime/')
		.then(res=>{
		    this.setState({whole_crime_data: res});
		    console.log(res);
		})
		.catch(e=>{
		    console.log(e);
		});
	}
    }


    componentDidUpdate(){
        console.log("didupdate:",this.props.google);

    }
    
    render() {
	if (!this.props.loaded) {
	    return <div>Loading...</div>;
	}

	var google = window.google;

	
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
		</Map>
	      </div>
	    </div>
	);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAoJlSl4IbOSUHqU8cSjmoRfYCAR5vzgeo'
})(MapContainer);
