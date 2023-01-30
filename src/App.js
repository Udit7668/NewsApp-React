
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  
  // name="Ramesh"
  render() {
    return (
      <div>
       {/*  Hello my first class based component {this.name}; */}

        <NavBar/>

        <News pageSize={6}/>
      </div>
    )
  }
}
