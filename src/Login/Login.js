import React from 'react';
import Map from "../Map/Map";
import { Button, Heading, TextInput, Pane } from "evergreen-ui";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  login = () => {
    this.setState({ loggedIn: true })
  }

  render() {

    const {
      loggedIn
    } = this.state;

    return (

      <React.Fragment>

        {

          loggedIn && <Map />
        }

        {
          !loggedIn &&

          <Pane display="flex" flexDirection="column" alignItems="center" className="login-page">
            <Heading size={700} marginTop={120} marginBottom={50}>Log in to make a difference</Heading>
            <Pane display="flex" flexDirection="column" alignItems="center">
              <TextInput
                className="input"
                name="text-input-name"
                placeholder="Email"
              />
              <TextInput
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </Pane>

            <Pane display="flex" flexDirection="row" justifyContent="center" marginTop={20}>
              <Button intent="success" appearance="primary" height={48} onClick={this.login}>Log In</Button>
              <img src="./background.png" className="background-img" />
            </Pane>

          </Pane>
        }
      </React.Fragment>

    )
  }
}
