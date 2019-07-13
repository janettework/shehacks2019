import React, { Component } from 'react'
import { Text, Pane } from 'evergreen-ui'


import './index.css';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pane display="flex" flexDirection="column" className="menu-button" paddingTop={8} paddingBottom={10} paddingLeft={16} paddingRight={16} backgroundColor={this.props.active ? "#60b27a" : ""}>
        <img src={this.props.source} className="menu-button-icon" />
        <Text marginTop={5} size={300} color="black">{this.props.text}</Text>
      </Pane>
    );
  }
}
