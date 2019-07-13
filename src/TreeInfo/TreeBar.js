import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import './index.css';

export default class TreeBar extends Component {

  constructor() {
    super();

    this.state = {
      fave: false
    }
  }

  handleClick = () => {
    this.setState({ fave: !this.state.fave });
  }

  render() {
    return (
      <Pane display="flex" flexDirection="row" marginTop={20} marginBottom={16} justifyContent="center">
        <Button iconBefore="heart" marginLeft={12} marginRight={12} onClick={this.handleClick} intent={this.state.fave ? "danger" : "none"}>Favourite Tree</Button>
        <Button iconBefore="camera" marginLeft={12} marginRight={12}>Upload Photo</Button>
      </Pane>
    );
  }
}
