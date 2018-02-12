import * as React from 'react';
import './assets/App.css';
import * as basicFunctions from './basicFunctions';

const logo = require('./assets/logo.svg');

class App extends React.Component {
  
  render() {
    basicFunctions.echoString('boop');
    basicFunctions.sum(1, 2);
    basicFunctions.booleanParadoxFunction(true);

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Page is rendered.</h1>
        </header>
      </div>
    );
  }
}

export default App;
