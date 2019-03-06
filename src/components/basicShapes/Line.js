import React, { Component } from 'react'
import * as d3 from 'd3'

const color = '#0000ff'
const lineWidth = 10
const width = 300
const height = 100
const drawingWidth = width + lineWidth
const drawingHeight = height + lineWidth

export default class Line extends Component {
  static lineGenerator = d3.line()

  state = {
    values: [
      [lineWidth / 2, lineWidth / 2],
      [width / 3, height + lineWidth / 2],
      [200, lineWidth / 2],
      [width, height + lineWidth / 2]]
  }

  render() {
    
    
    
    const svgStyle = { display: 'block' }
    return (
      <svg style={svgStyle} width={drawingWidth} height={drawingHeight}>
        <g>
          <path d={this.state.path}
            fill='none' stroke={color}
            strokeWidth={lineWidth}
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </g>
      </svg>
    )
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const path = Line.lineGenerator(prevState.values)
    prevState = { ...prevState, path }
    return prevState
  }
}