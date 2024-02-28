import { useEffect, useRef } from "react"
import { Graph } from '@antv/x6'
import { register } from '@antv/x6-react-shape'
import { Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'

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

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];

function NodeComponent() {
  return (
    <div>
      <Descriptions title="User Info" layout="vertical" items={items} />
    </div>
  )
}

export default function JSONGraphTree() {
  const graphRef = useRef(null);

  useEffect(() => {
    if (graphRef.current) {
      const graph = new Graph({
        container: graphRef.current,
        scaling: { min: 1, max: 2 },
        panning: true,
        mousewheel: true,
        autoResize: true,
        grid: {
          size: 20,
          visible: true,
          type: 'dot',
          args: {
            color: '#a0a0a0',
            thickness: 1,
          },
        },
        background: {
          color: '#ffffff',
        },
      })
      setTimeout(() => {
        graph.fromJSON(data)
        graph.centerContent()
      }, 200)
    }
  }, [graphRef])

  return (
    <div className="flex-1" ref={graphRef} />
  )
}
