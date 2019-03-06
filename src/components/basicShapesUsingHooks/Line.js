import React, { Component } from 'react'
import * as d3 from 'd3'

export default function Line() {
  const color = '#0000ff'
  const lineWidth = 10
  const width = 300
  const height = 100
  const drawingWidth = width + lineWidth
  const drawingHeight = height + lineWidth
  const data = [[5, 5], [100, 105], [200, 5], [300, 105]]

  const draw = (svg, width, height) => {
    var lineGenerator = d3.line()
    var pathString = lineGenerator(data)
    svg.attr('width', width)
       .attr('height', height)
    svg.append('path')
       .attr('d', pathString)
       .attr('stroke', color)
       .attr('fill', 'none')
       .attr('stroke-width', lineWidth)
       .attr('stroke-linecap', 'round')
       .attr('stroke-linejoin', 'round')
  }
  return (
    <D3Component render={svg => draw(svg, drawingWidth, drawingHeight)} />
  )
}

const D3Component = ({ render, height, width }) => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    render(d3.select(ref.current));
  });
  return (
    <svg width={width} height={height}>
      <g ref={ref} transform={`translate(0, 0)`} />
    </svg>
    )
}

