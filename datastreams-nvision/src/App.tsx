import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './component/TestComponent';
import NavBar from './component/NavBar';

function App() {
  let test = "testString";
  return (
  <>
  <NavBar></NavBar>
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Heyo {test}
        </p>
        <TestComponent></TestComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
  );
}

export default App;
