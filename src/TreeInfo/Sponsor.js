import React, { Component } from 'react'
import { Text, Pane } from 'evergreen-ui'

import './index.css';

export default class Sponsor extends Component {


  render() {
    return (
      <Pane display="flex" flexDirection="row" justifyContent="space-around" marginTop={10} paddingTop={4} paddingLeft={4} paddingRight={4} paddingBottom={4} borderRadius={6} width={130} backgroundColor="white">
        <Text size={300}>Sponsored by </Text>
        <img src="./nine.png" height={16} />
      </Pane >
    );
  }
}
