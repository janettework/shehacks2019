import L from 'leaflet'
import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import Markers from './Markers'
import TreeInfo from '../TreeInfo'
import Menu from '../Menu'
import './Map.css';
import Search from './Search'


import { Pane } from 'evergreen-ui'

class Map extends Component {
  constructor() {
    super()
    // Central Station
    this.state = {
      lat: -33.883006,
      lng: 151.206536,
      zoom: 15,
      showMap: true,
    }
  }

  handleClick = event => {
    this.setState({ showMap: false })
  }

  handleClose = () => {
    this.setState({ showMap: true })
  }

  treeIcon = L.icon({
    iconUrl: 'tree.png',
    iconSize: [40, 41],
  })

  treeHeartIcon = L.icon({
    iconUrl: 'tree-heart.png',
    iconSize: [40, 41],
  })

  blueDot = L.icon({
    iconUrl: 'bluedot.gif',
    iconSize: [25, 25],
  })

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Pane>
        <Menu />
        {this.state.showMap ? <LeafletMap center={position} zoom={this.state.zoom}>
          <Search />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            crossOrigin={true}
          />
          <Marker position={Markers.markerPos1} onClick={this.handleClick} icon={this.blueDot} />
          <Marker position={Markers.markerPos2} onClick={this.handleClick} icon={this.treeHeartIcon} />
          <Marker position={Markers.markerPos3} onClick={this.handleClick} icon={this.treeHeartIcon} />
          <Marker position={Markers.markerPos4} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos5} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos6} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos7} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos8} onClick={this.handleClick} icon={this.treeHeartIcon} />
          <Marker position={Markers.markerPos9} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos10} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos11} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos12} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos13} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos14} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos15} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos16} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos17} onClick={this.handleClick} icon={this.treeHeartIcon} />
          <Marker position={Markers.markerPos18} onClick={this.handleClick} icon={this.treeIcon} />
          <Marker position={Markers.markerPos19} onClick={this.handleClick} icon={this.treeIcon} />

        </LeafletMap> : <TreeInfo onClose={this.handleClose} />}

      </Pane>
    );
  }
}

export default Map