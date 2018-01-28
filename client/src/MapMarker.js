import React from 'react';
import PropTypes from 'prop-types';

export default class MapMarker extends React.Component {
    render() {
	return null;
    }
    
    componentWillUpdate(prevProps){
    }
    
    componentDidUpdate(prevProps) {
	// component updated
	if ((this.props.map !== prevProps.map) ||
	    (this.props.lat !== prevProps.lat)) {
            // The relevant props have changed
	    this.renderMarker();
	}
    }
    
    renderMarker() {
	let {
            map, google, lat, lon
	} = this.props;
	
//	let pos = {lat:lat , lon:lon};
	let position = new google.maps.LatLng(lat, lon);
	
	const pref = {
            map: map,
            position: position
	};
	this.marker = new google.maps.Marker(pref);
    }
}

MapMarker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
};

