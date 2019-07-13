import React from 'react';
import './App.css';
import Splash from "./Splash/Splash";
import Login from "./Login/Login";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }


  render() {
    const {loading} = this.state;

    return (

      <React.Fragment>
        {loading ? <Splash/> : <Login/>}
      </React.Fragment>
    )
  }
}
