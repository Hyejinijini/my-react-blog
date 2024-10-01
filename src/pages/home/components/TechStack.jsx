import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import { motion } from 'framer-motion'
import useThemeStore from '@store/useThemeStore.js'

// BubbleChart 함수 정의
function BubbleChart(
  data,
  {
    name = ([x]) => x,
    label = name,
    value = ([, y]) => y,
    group,
    title,
    link,
    linkTarget = '_blank',
    width = 640,
    height = width,
    padding = 3,
    margin = 1,
    marginTop = margin,
    marginRight = margin,
    marginBottom = margin,
    marginLeft = margin,
    groups,
    colors = d3.schemeTableau10,
    fill = '#ccc',
    fillOpacity = 0.7,
    stroke,
    strokeWidth,
    strokeOpacity
  } = {}
) {
  // Compute the values.
  const D = d3.map(data, (d) => d)
  const V = d3.map(data, value)
  const G = group == null ? null : d3.map(data, group)
  const I = d3.range(V.length).filter((i) => V[i] > 0)

  // Unique the groups.
  if (G && groups === undefined) groups = I.map((i) => G[i])
  groups = G && new d3.InternSet(groups)

  // Construct scales.
  const color = G && d3.scaleOrdinal(groups, colors)

  // Compute labels and titles.
  const L = label == null ? null : d3.map(data, label)
  const T = title === undefined ? L : title == null ? null : d3.map(data, title)

  // Compute layout: create a 1-deep hierarchy, and pack it.
  const root = d3
    .pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(d3.hierarchy({ children: I }).sum((i) => V[i]))

  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: 600px;')
    .attr('fill', 'currentColor')
    .attr('font-size', 10)
    .attr('font-family', 'sans-serif')
    .attr('text-anchor', 'middle')

  const leaf = svg
    .selectAll('a')
    .data(root.leaves())
    .join('a')
    .attr('xlink:href', link == null ? null : (d, i) => link(D[d.data], i, data))
    .attr('target', link == null ? null : linkTarget)
    .attr('transform', (d) => `translate(${d.x},${d.y})`)

  leaf
    .append('circle')
    .attr('stroke', stroke)
    .attr('stroke-width', strokeWidth)
    .attr('stroke-opacity', strokeOpacity)
    .attr('fill', (d) => D[d.data].color || fill)
    .attr('fill-opacity', fillOpacity)
    .attr('r', (d) => d.r)
    .on('mouseover', (event, d) => {
      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr('r', d.r * 1.1)
        .attr('fill-opacity', 1)
    })
    .on('mouseout', (event, d) => {
      d3.select(event.currentTarget).transition().duration(200).attr('r', d.r).attr('fill-opacity', fillOpacity)
    })
    .on('click', (event, d) => {
      const currentColor = D[d.data].color
      const isDarkened = d3.select(event.currentTarget).attr('fill') === d3.rgb(currentColor).darker(1).toString()

      d3.select(event.currentTarget)
        .transition()
        .duration(200)
        .attr('fill', isDarkened ? currentColor : d3.rgb(currentColor).darker(1))
    })

  if (T) leaf.append('title').text((d) => T[d.data])

  if (L) {
    const uid = `O-${Math.random().toString(16).slice(2)}`

    leaf
      .append('clipPath')
      .attr('id', (d) => `${uid}-clip-${d.data}`)
      .append('circle')
      .attr('r', (d) => d.r)

    leaf
      .append('text')
      .attr('clip-path', (d) => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
      .selectAll('tspan')
      .data((d) => `${L[d.data]}`.split(/\n/g))
      .join('tspan')
      .attr('x', 0)
      .attr('y', (d, i, D) => `${i - D.length / 2 + 0.85}em`)
      .attr('fill-opacity', (d, i, D) => (i === D.length - 1 ? 0.7 : null))
      .text((d) => d)
  }

  return Object.assign(svg.node(), { scales: { color } })
}

// React 컴포넌트로 래핑
const BubbleChartComponent = ({ data, options }) => {
  const svgRef = useRef()

  useEffect(() => {
    const svgElement = BubbleChart(data, options)
    svgRef.current.innerHTML = ''
    svgRef.current.appendChild(svgElement)
  }, [data, options])

  return <div ref={svgRef} style={{ margin: 0, padding: 0 }}></div>
}

// Test 컴포넌트
const Test = () => {
  const { isDarkMode } = useThemeStore()

  const data = [
    { name: 'Node.js', value: 10, color: '#d68e9a', darkColor: '#d68e9a' },
    { name: 'Zustand', value: 10, color: '#d68e9a', darkColor: '#d68e9a' },
    { name: 'Storybook', value: 10, color: '#d68e9a', darkColor: '#d68e9a' },
    { name: 'Axios', value: 15, color: '#e8a3b2', darkColor: '#e8a3b2' },
    { name: 'React Hook Form', value: 20, color: '#f2b2c8', darkColor: '#f2b2c8' },
    { name: 'JavaScript', value: 30, color: '#f5a3b8', darkColor: '#f5a3b8' },
    { name: 'Tailwind CSS', value: 35, color: '#f56d87', darkColor: '#f56d87' },
    { name: 'CSS', value: 35, color: '#f3a1b6', darkColor: '#f3a1b6' },
    { name: 'React', value: 40, color: '#e66477', darkColor: '#e66477' },
    { name: 'HTML', value: 45, color: '#e0546c', darkColor: '#e0546c' }
  ].map((item) => ({
    ...item,
    color: isDarkMode ? item.darkColor : item.color
  }))

  const options = {
    name: (d) => d.name,
    value: (d) => d.value,
    width: 800,
    height: 600,
    padding: 5,
    fill: '#4caf50',
    colors: d3.schemeCategory10
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
      }}
      style={{ margin: 0 }}
    >
      <BubbleChartComponent data={data} options={options} className="flex items-center justify-center" />
    </motion.div>
  )
}

export default Test
