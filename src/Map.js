import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';

class Map extends Component {
  // Canva
  markerPos1 = {
    lat: -33.885149,
    lng: 151.211213
  }

  // Prince Alfred Park
  markerPos2 = {
    lat: -33.887287,
    lng: 151.205934,
  }

  markerPos3 = {
    lat: -33.8548157,
    lng: 151.2164539,
  }

  constructor() {
    super()
    this.state = {
      lat: -33.873146,
      lng: 151.208231,
      zoom: 14
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.markerPos1}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={this.markerPos2}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={this.markerPos3}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map