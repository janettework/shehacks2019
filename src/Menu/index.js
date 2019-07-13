import React, { Component } from 'react'
import { Heading, Checkbox, Paragraph, Button, Pane } from 'evergreen-ui'

import MenuButton from './MenuButton'

import './index.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <Pane display="flex" flexDirection="row" className="menu" height={80} justifyContent="space-around" width="100%">
        <MenuButton source="./forest.png" text="The Forest" active />
        <MenuButton source="./log.png" text="My Log" />
        <MenuButton source="./sprout.png" text="My Growth" />
      </Pane>
    );
  }
}
