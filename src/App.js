import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Device_Elements from './pagedraw/device_elements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Device_Elements/>
      </div>
    );
  }
}

export default App;
