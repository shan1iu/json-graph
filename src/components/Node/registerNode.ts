import { register } from '@antv/x6-react-shape'

import { StringNode, NumberNode, BigIntNode, BooleanNode } from "./LeafNode";

const registerNode = () => {
  register({
    shape: 'string-node',
    component: (nodeInfo) => StringNode(nodeInfo.node.data.value),
  });
  // register({
  //   shape: 'number-node',
  //   component: NumberNode,
  // });
  // register({
  //   shape: 'bigint-node',
  //   component: BigIntNode,
  // });
  // register({
  //   shape: 'boolean-node',
  //   component: BooleanNode,
  // });
}

export default registerNode
