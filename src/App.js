import React, { Component } from 'react'
import Line from './components/basicShapes/Line.js'
import Curve from './components/basicShapes/Curve.js'
import Arc from './components/basicShapes/Arc.js'
import Pie from './components/basicShapes/Pie.js'
import PieWithLabels from './components/basicShapes/PieWithLabels.js'
import Rect from './components/basicShapes/Rect.js'
import RadialLine from './components/basicShapes/RadialLine.js'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h1>Lines</h1>
          <Line></Line>
          <Curve></Curve>
          <RadialLine></RadialLine>
        </section>

        <section>
          <h1>Rectangles</h1>
          <Rect></Rect>
        </section>

        <section>
          <h1>Circles</h1>
          <Arc></Arc>
          <Pie></Pie>
          <PieWithLabels></PieWithLabels>
        </section>
      </div>
    );
  }
}

export default App;
