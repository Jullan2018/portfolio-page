import React, { Component } from 'react';
import Home from './components/home.js';
import Nav from './components/nav.js';
import './components/style.css';

export default class App extends Component {
  render() {
    return (
      <>
       <Nav/>
        <Home/>
      </>
    )
  }
}