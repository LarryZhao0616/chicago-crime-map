import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoJlSl4IbOSUHqU8cSjmoRfYCAR5vzgeo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 90px)` }} />,
    mapElement: <div style={{ height: `calc(100vh - 90px)` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.8789, lng: -87.6359 }}
  >
  </GoogleMap>
 );

export default MapComponent;
