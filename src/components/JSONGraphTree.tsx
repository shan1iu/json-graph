import { useEffect, useRef } from "react"
import { Graph } from '@antv/x6'

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
}


export default function JSONGraphTree() {
  const graphRef = useRef(null);

  useEffect(() => {
    if (graphRef.current) {
      const graph = new Graph({
        container: graphRef.current,
        grid: {
          size: 20,
          visible: true,
          type: 'dot',
          args: {
            color: '#a0a0a0', // 网点颜色
            thickness: 1, // 网点大小
          },
        },
        background: {
          color: '#ffffff',
        },
      })
      // graph.fromJSON(data)
      // graph.centerContent()
    }
  }, [graphRef])

  return (
    <div className="flex-1" ref={graphRef}>
      <span>JSONGraphTree</span>
    </div>
  )
}
