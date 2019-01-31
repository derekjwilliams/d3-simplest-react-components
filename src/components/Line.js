import React, { Component } from 'react';
import * as d3 from 'd3';

// line attributes
const color = '#0000ff'
const width = 10

export default class Line extends Component {
  static lineGenerator = d3.line()
  state = {
    values: [
      [0, 0],
      [50,50],
      [100, 0],
      [150, 50]], 
      offset: { x: width/2, y: width/2 }
  }
  render() {
    return <svg>
        <g transform={`translate(${this.state.offset.x},${this.state.offset.y})`}>
          <path d={this.state.path} fill='none' stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </svg>
 }
  static getDerivedStateFromProps(nextProps, prevState) {
    const path = Line.lineGenerator(prevState.values)
    prevState = { ...prevState, path }
    return prevState
  }
}