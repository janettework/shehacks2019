import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import './index.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pane display="flex" flexDirection="column">

        <Pane display="flex" flexDirection="column">
          <Button marginBottom={12} iconBefore="arrow-left" width={80} onClick={this.props.onClose}>Back</Button>
        </Pane>

        <Pane display="flex" flexDirection="column" marginVertical={20}>
          <Heading size={900}>{this.props.name}</Heading>
          <img src="./baby-tree.jpeg" alt="baby tree" className="tree-img" />
        </Pane>


      </Pane>
    );
  }
}
