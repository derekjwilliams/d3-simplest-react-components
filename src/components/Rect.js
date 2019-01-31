import React, { Component } from 'react';
import * as d3 from 'd3';

const color = '#0000ff'
const lineWidth = 10

const width = 300
const height = 100

const drawingWidth = width + lineWidth
const drawingHeight = height + lineWidth

export default class Rect extends Component {
  static lineGenerator = d3.line()
  state = {
    values: [
        [lineWidth/2, lineWidth/2],
        [width/3, height + lineWidth/2],
        [200, lineWidth/2],
        [width, height + lineWidth/2]], 
      offset: { x: lineWidth/2, y: lineWidth/2 }
  }
  render() {
    const svgStyle = { display: 'block' }
    return (
      <svg  style={svgStyle} width={drawingWidth} height={drawingHeight}>
        <g>
          <rect x={lineWidth/2} y={lineWidth/2} width={width} height={height} fill='none' strokeWidth={lineWidth} stroke={color} strokeLinecap='round' strokeLinejoin='round'/>
        </g>
      </svg>)
 }
  static getDerivedStateFromProps(nextProps, prevState) {
    const path = Rect.lineGenerator(prevState.values)
    prevState = { ...prevState, path }
    return prevState
  }
}