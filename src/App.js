import React, { Component } from 'react'
import Line from './components/basicShapes/Line.js'
import Curve from './components/basicShapes/Curve.js'
import Arc from './components/basicShapes/Arc.js'
import Pie from './components/basicShapes/Pie.js'
import PieWithLabels from './components/basicShapes/PieWithLabels.js'
import Rect from './components/basicShapes/Rect.js'
import RadialLine from './components/basicShapes/RadialLine.js'

import LineWithProps from './components/basicShapesWithProps/LineWithProps.js'

import LineUsingHooks from './components/basicShapesUsingHooks/Line'

import './App.css'

export class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div>
          <h1>Using Hooks for Life Cycle</h1>
          <section>
            <h2>Lines</h2>
            <LineUsingHooks></LineUsingHooks>
          </section>
        </div>
        <div>
          <h1>Passing Data Using Props</h1>
          <section>
            <h2>Lines</h2>
            <LineWithProps data={[[5, 5], [100, 105], [200, 5], [300, 105]]}></LineWithProps>
          </section>
        </div>
        <div>
          <h1>Passing Data Using Props</h1>
          <section>
            <h2>Lines</h2>
            <LineWithProps data={[[5, 5], [100, 105], [200, 5], [300, 105]]}></LineWithProps>
          </section>
        </div>
        <div>
        <h1>Very Basic Shapes</h1>
          <section>
            <h2>Lines</h2>
            <Line></Line>
            <Curve></Curve>
            <RadialLine></RadialLine>
          </section>

          <section>
            <h2>Rectangles</h2>
            <Rect></Rect>
          </section>

          <section>
            <h2>Circles</h2>
            <Arc></Arc>
            <Pie></Pie>
            <PieWithLabels></PieWithLabels>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
