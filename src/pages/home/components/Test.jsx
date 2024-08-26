import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import { motion } from 'framer-motion'

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
    .attr('viewBox', [-marginLeft, -marginTop, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
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
    .attr('fill', (d) => D[d.data].color || fill) // Use the color from data or default fill
    .attr('fill-opacity', fillOpacity)
    .attr('r', (d) => d.r)

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

  return <div ref={svgRef}></div>
}

// Test 컴포넌트
const Test = () => {
  const data = [
    { name: 'Node.js', value: 10, color: '#ffe4e6' },
    { name: 'Zustand', value: 10, color: '#ffe4e6' },
    { name: 'Storybook', value: 10, color: '#ffe4e6' },
    { name: 'Axios', value: 15, color: '#fecdd3' },
    { name: 'React Hook Form', value: 20, color: '#fda4af' },
    { name: 'JavaScript', value: 30, color: '#fb7185' },
    { name: 'Tailwind CSS', value: 35, color: '#f43f5e' },
    { name: 'CSS', value: 35, color: '#e11d48' },
    { name: 'React', value: 40, color: '#be123c' },
    { name: 'HTML', value: 45, color: '#9f1239' }
  ]

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
    >
      <BubbleChartComponent data={data} options={options} className="flex items-center justify-center" />
    </motion.div>
  )
}

export default Test
