import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import Markers from './Markers'
import './Map.css';

class Map extends Component {
  handleClick = event => {
    const { lat, lng } = event.latlng
    console.log(`Clicked at ${lat}, ${lng}`)
  }

  constructor() {
    super()
    // Central Station
    this.state = {
    lat: -33.883006,
      lng: 151.206536,
      zoom: 15
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
        <Marker position={Markers.markerPos1} onClick={this.handleClick} />
        <Marker position={Markers.markerPos2} onClick={this.handleClick} />
        <Marker position={Markers.markerPos3} onClick={this.handleClick} />
        <Marker position={Markers.markerPos4} onClick={this.handleClick} />
        <Marker position={Markers.markerPos5} onClick={this.handleClick} />
        <Marker position={Markers.markerPos6} onClick={this.handleClick} />
        <Marker position={Markers.markerPos7} onClick={this.handleClick} />
        <Marker position={Markers.markerPos8} onClick={this.handleClick} />
        <Marker position={Markers.markerPos9} onClick={this.handleClick} />
        <Marker position={Markers.markerPos10} onClick={this.handleClick} />
        <Marker position={Markers.markerPos11} onClick={this.handleClick} />
      </LeafletMap>
    );
  }
}

export default Map