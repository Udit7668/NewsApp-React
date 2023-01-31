
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  
  // name="Ramesh"
  render() {
    return (
      <Router>
    <div>    
       {/*  Hello my first class based component {this.name}; */}

<NavBar/>      
        <Switch>
          <Route exact path="/">
          <News key="general" pageSize={6} country="in" category="general"/>
          </Route>
          <Route key="general" exact path="/general">
          <News pageSize={6} country="in" category="general"/>
          </Route>
          <Route key="entertainment" exact  path="/entertainment">
          <News pageSize={6} country="in" category="entertainment"/>
          </Route>
          <Route key="health" exact path="/health">
          <News pageSize={6} country="in" category="health"/>
          </Route>
          <Route key="science" exact path="/science">
          <News pageSize={6} country="in" category="science"/>
          </Route>
          <Route key="sports" exact path="/sports">
          <News pageSize={6} country="in" category="sports"/>
          </Route>
          <Route key="technology" exact path="/technology">
          <News pageSize={6} country="in" category="technology"/>
          </Route>
        </Switch>

       
      </div>
      </Router>

    )
  }
}
