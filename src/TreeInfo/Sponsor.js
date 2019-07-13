import React, { Component } from 'react'
import { Text, Pane } from 'evergreen-ui'

import './index.css';

export default class Sponsor extends Component {


  render() {
    return (
      <Pane display="flex" flexDirection="row" justifyContent="space-around" marginTop={10} width={130}>
        <Text size={300}>Sponsored by </Text>
        <img src="./nine.png" height={16} />
      </Pane >
    );
  }
}
