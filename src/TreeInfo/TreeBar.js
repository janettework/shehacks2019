import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import './index.css';

export default class TreeBar extends Component {


  render() {
    const name = "A Tree Name Goes Here"

    return (
      <Pane display="flex" flexDirection="column">
        <Button marginBottom={12} width={120}>Adopt Tree</Button>
      </Pane>
    );
  }
}
