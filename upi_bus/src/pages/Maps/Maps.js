import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './maps.css'
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className='mapmain'>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 22.628580,
            lng: 88.433968
          }
        }
      />
       </div>
    );
   
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBr-Eu-4HxhgfixYsGEIEidTjVbhLYlaVI'
})(MapContainer);