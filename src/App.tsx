import * as React from 'react';
import './assets/App.css';
import * as basicFunctions from './components/basicFunctions';
import Hello from './components/hello';

const logo = require('./assets/logo.svg');

class App extends React.Component {
  
  render() {
    basicFunctions.echoString('boop');

    const firstNumber: number = 1;
    const secondNumber: number = 2;
    console.log(`${firstNumber} + ${secondNumber} == ${basicFunctions.sum(firstNumber, secondNumber)}`);

    basicFunctions.booleanParadoxFunction(true);

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Page is rendered.</h1>
        </header>
        <div>
          <Hello name="TypeScript" enthusiasmLevel={5} />
          {/* <Hello name="Jack" enthusiasmLevel={0}/> */}
        </div>
      </div>
    );
  }
}

export default App;
