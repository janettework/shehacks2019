import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import Header from './Header'
import TreeBar from './TreeBar'
import Actions from './Actions'

import './index.css';

export default class TreeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = "A Tree Name Goes Here"

    return (
      <Pane display="flex" padding={16} flexDirection="column">
        <Header name={name} onClose={this.props.onClose} />
        <TreeBar />
        <Paragraph>
          {name} was planted in 2014 by <strong>Aga O</strong>. It is a <strong>Northern Pine Tree</strong> - species native to the Queensland area.
        </Paragraph>

        <Actions />

      </Pane>
    );
  }
}
