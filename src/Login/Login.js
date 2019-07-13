import React from 'react';
import Map from "../Map/Map";
import {Button, TextInput} from "evergreen-ui";
import "./Login.css";

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

      <React.Fragment>

        {

          loggedIn && <Map/>
        }

        {

          !loggedIn &&
          <div className="background">
            <div className="login">
              <div>Sign in to make a difference</div>
              <div className="inputs">
                <TextInput
                  className="input"
                  name="text-input-name"
                  placeholder="user name"
                />
                <TextInput
                  className="input"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>

              <Button marginRight={16} onClick={this.login}>Login</Button>


            </div>
          </div>
        }
      </React.Fragment>

    )
  }
}
