import React, { Component } from 'react'
import * as d3 from 'd3'

const color = '#0000ff'
const lineWidth = 10
const width = 300
const height = 200
const drawingWidth = width + lineWidth
const drawingHeight = height + lineWidth

export default class RadialLine extends Component {
  static radialLineGenerator = d3.radialLine()

  state = {
    values: [
      [0, 80],
      [Math.PI * 0.25, 80],
      [Math.PI * 0.5, 30],
      [Math.PI * 0.75, 80],
      [Math.PI, 80],
      [Math.PI * 1.25, 80],
      [Math.PI * 1.5, 80],
      [Math.PI * 1.75, 80],
      [Math.PI * 2, 80]
    ]
  }

  render() {
    const svgStyle = { display: 'block' }
    const transform = `translate(${drawingWidth / 2},${drawingHeight / 2})`
    return (
      <svg style={svgStyle} width={drawingWidth} height={drawingHeight}>
        <g transform={transform}>
          <path d={this.state.path} fill='none' stroke={color} strokeWidth={lineWidth} strokeLinecap='round' strokeLinejoin='round'></path>
        </g>
      </svg>
    )
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    const path = RadialLine.radialLineGenerator(prevState.values)
    prevState = { ...prevState, path }
    return prevState
  }
}