import React, { Component } from 'react'
import * as d3 from 'd3'

const color = '#0000ff'
const lineWidth = 10
const width = 300
const height = 300
const drawingWidth = width + lineWidth
const drawingHeight = height + lineWidth

export default class Pie extends Component {
  static arcGenerator = d3.arc()
    .innerRadius(20)
    .outerRadius(100)
    .padAngle(.02)
    .padRadius(100)
    .cornerRadius(4)

  state = {
    values: [25, 10, 20],
  }

  render() {
    const svgStyle = { display: 'block' }
    const transform = `translate(${drawingWidth / 2}, ${drawingHeight / 2})`
    return (
      <svg style={svgStyle} width={drawingWidth} height={drawingHeight}>
        <g transform={transform}>
          {this.state.values.map((v, i) => (
            <path d={v.slice} key={i}
              fill={color}>
            </path>
          ))}
        </g>
      </svg>
    )
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const values = d3.pie()(prevState.values).map(d =>
      ({ slice: Pie.arcGenerator(d) })
    )
    prevState = { ...prevState, values }
    return prevState
  }
}