
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  
   name="Ramesh"
  render() {
    return (
      <div>
        Hello my first class based component {this.name};
      </div>
    )
  }
}
