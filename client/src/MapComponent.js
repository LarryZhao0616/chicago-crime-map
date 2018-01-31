import React from "react";
//import { compose, withProps, withHandlers } from "recompose";
import PropTypes from 'prop-types';
import { Marker, withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
//import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

/*
<Marker
            position={marker.coordinates}
            id={marker.id}
            key={marker.id}
            icon={url}
            style={{height: "5xpx", width: "5px"}}
            className={'marker'}
            />
*/

const RenderMap = withScriptjs(withGoogleMap(props =>(
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 41.8789, lng: -87.6359 }}>
      <Marker
      position={{ lat: -41.878, lng: -87.635 }}
	/>
    </GoogleMap>
)));
			       
class MapComponent extends React.Component{
    constructor(props) {
        super(props);
	this.onMarkerClustererClick = this.onMarkerClustererClick.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState){
	if (this.props.markers !== nextProps.markers) {
            return true;
        }
	
//        if (this.props.map !== nextProps.map) {
//            return true;
//        }

        if (this.state === nextState) {
            return false;
        }

        return true;
    }

    onMarkerClustererClick(markerClusterer){
	const clickedMarkers = markerClusterer.getMarkers();
	console.log(`Current clicked markers length: ${clickedMarkers.length}`);
        console.log(clickedMarkers);
    }

    render(){
	console.log(this.props.markers);
	return(
	      <RenderMap
		googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoJlSl4IbOSUHqU8cSjmoRfYCAR5vzgeo&v=3.exp&libraries=geometry,drawing,places"
		loadingElement = {<div style={{ height: `100%` }} />}
                containerElement = {<div style={{ height: `calc(100vh - 85px)` }} />}
                mapElement = {<div style={{ height: `calc(100vh - 85px)` }} />}
		markers = {this.props.markers}
		onMarkerClustererClick={this.onMarkerClustererClick}
		>
		</RenderMap>
	)
    }
}

RenderMap.propTypes = {
    markers : PropTypes.array
};

RenderMap.defaultProps = {
    markers : []
};

MapComponent.propTypes = {
    markers : PropTypes.array
};

MapComponent.defaultProps = {
    markers : []
};
export default MapComponent;
