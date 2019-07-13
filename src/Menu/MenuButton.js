import React, { Component } from 'react'
import { Text, Pane } from 'evergreen-ui'


import './index.css';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pane display="flex" flexDirection="column" className="menu-button">
        <img src={this.props.source} className="menu-button-icon" />
        <Text marginTop={5} size={300}>{this.props.text}</Text>
      </Pane>
    );
  }
}
