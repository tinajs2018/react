import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Learning React</h2>
        </div>
        <p className="App-intro">
       It is a matter of time before we emerge  strong and better  version of ourselves boom !
        </p>
      </div>
    );
  }
}

export default App;
