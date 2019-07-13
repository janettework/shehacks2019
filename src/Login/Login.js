import React from 'react';
import Map from "../Map/Map";
import {Button, TextInput} from "evergreen-ui";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  login = () => {
    this.setState({loggedIn: true})
  }

  render() {

    const {
      loggedIn
    } = this.state;

    return (

      <div>
        {

          loggedIn && <Map/>
        }

        {

          !loggedIn &&
          <div className="login">
            <div>Welcome back</div>

            <div>
              <TextInput
                name="text-input-name"
                placeholder="user name"
              />
              <TextInput
                type="password"
                name="password"
              />
            </div>

            <Button marginRight={16} onClick={this.login}>Login</Button>
          </div>
        }
      </div>
    )
  }
}
