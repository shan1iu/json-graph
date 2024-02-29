import { useEffect, useRef } from "react"
import { Graph } from '@antv/x6'
import { debounce } from 'radash';

import { useStore } from "../stores"
import registerNode from "./Node/registerNode";

export default function JSONGraphTree() {
  const graphRef = useRef(null);
  const jsonInput = useStore((state: any) => state.jsonInput);

  // init canvas
  useEffect(() => {
    if (graphRef.current) {
      registerNode()
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
      });
      setTimeout(() => {
        graph.addNode({ shape: 'string-node', data: { value: 'string-node' } })
        // graph.addNode({ shape: 'number-node' })
        // graph.centerContent()
      }, 200);
    }
  }, [graphRef]);

  //reDraw Graph
  const reDrawJSONGraph = debounce({ delay: 500 }, () => {
    console.log('redraw graph：', jsonInput);
  })

  useEffect(() => {
    reDrawJSONGraph();
    return () => { reDrawJSONGraph.cancel() }
  }, [jsonInput]);

  return (
    <div className="flex-1" ref={graphRef} />
  )
}
