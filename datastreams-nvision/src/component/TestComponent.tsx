import React from "react";
import logo from './logo.svg';
import './Test.css';

class TestComponent extends React.Component {
    render() { 
      let test = "Hello";
      return <>
          <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is typescript: {test}
        </p>
      </header>
    </div>
      
      </>;
    }
  }
  export default TestComponent;