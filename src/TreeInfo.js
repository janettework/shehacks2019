import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import './TreeInfo.css';

export default class TreeInfo extends Component {
  constructor() {
    super()
    this.state = {
      box1: false,
      box2: false,
    }
  }

  checkBox1 = () => {
    this.setState({ box1: !this.state.box1 })
  }


  checkBox2 = () => {
    this.setState({ box2: !this.state.box2 })
  }

  render() {
    const name = "A Tree Name Goes Here"

    return (
      <Pane display="flex" padding={16} flexDirection="column">
        <Pane display="flex" flexDirection="column">
          <Button marginBottom={12} iconBefore="arrow-left" width={80}>Back</Button>
        </Pane>

        <Pane display="flex" flexDirection="column" marginVertical={20}>
          <Heading size={900}>{name}</Heading>
          <img src="./baby-tree.jpeg" alt="baby tree" className="tree-img" />
        </Pane>

        <Pane display="flex" flexDirection="column">
          <Button marginBottom={12} width={120}>Adopt Tree</Button>
        </Pane>

        <Paragraph>
          {name} was planted in 2014 by <strong>Aga O</strong>. It is a <strong>Northern Pine Tree</strong> - species native to the Queensland area.
        </Paragraph>

        <Heading size={500}>Actions:</Heading>
        <Checkbox checked={this.state.box1} label="Water" onChange={this.checkBox1} />
        <Checkbox checked={this.state.box2} label="Sweep leaves" onChange={this.checkBox2} />
      </Pane>
    );
  }
}
