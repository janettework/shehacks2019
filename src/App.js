import React from 'react';
import './App.css';
import Map from './Map/Map'
import Splash from "./Splash/Splash";

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

      <div>
        {loading ? <Splash/> : <Map/>}
      </div>
    )
  }
}
