import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import './index.css';

export default class Actions extends Component {

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
    return (
      <Pane display="flex" flexDirection="column">
        <Heading size={500}>Actions:</Heading>
        <Checkbox checked={this.state.box1} label="Water" onChange={this.checkBox1} />
        <Checkbox checked={this.state.box2} label="Sweep leaves" onChange={this.checkBox2} />
      </Pane>
    );
  }
}
