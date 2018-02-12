import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import * as basicFunctions from './basicFunctions';

class App extends Component {
  
  render() {
    basicFunctions.echoString("boop");
    basicFunctions.sum(1, 2);
    basicFunctions.booleanParadoxFunction(true);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Page is rendered.</h1>
        </header>
      </div>
    );
  }
}

export default App;
