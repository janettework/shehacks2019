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
    const name = "Justin TIMBERlake"

    return (
      <Pane display="flex" padding={14} flexDirection="column">
        <Header name={name} onClose={this.props.onClose} />
        <TreeBar />

        <Paragraph>
          <strong>{name}</strong> was planted in 2014 by <strong>Nine</strong>. It is a Northern Pine Tree, a species native to the Sydney basin area. Northern Pine Trees are coniferous trees, and they flourish in temperate or subtropical climates.
        </Paragraph>

        <Actions />

      </Pane>
    );
  }
}
