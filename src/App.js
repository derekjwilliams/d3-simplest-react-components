import React, { Component } from 'react';
import Line from './components/Line.js';
import Rect from './components/Rect.js';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Line></Line>
        <Rect></Rect>
      </div>
    );
  }
}

export default App;
