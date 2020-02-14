import logo from './logo.svg';
import './App.css';
import React from 'react';

import Conditions from './components/containers/Conditions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
      </header>
      <div>
        <Conditions />
      </div>
    </div>
  );
}

export default App;
