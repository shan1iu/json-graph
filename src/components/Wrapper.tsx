import { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';

import JSONGraphTree from './JSONGraphTree';

import 'split-pane-react/esm/themes/default.css';
import JSONEditor from './JSONEditor';

export default function Wrapper() {
  const [sizes, setSizes] = useState<(number | string)[]>([480, 'auto']);

  return (
    <div style={{ height: 'calc(100vh - 53px)' }}>
      <SplitPane sizes={sizes} onChange={setSizes} sashRender={() => null}>
        <Pane minSize={240} maxSize='50%'>
          <JSONEditor />
        </Pane>
        <JSONGraphTree />
      </SplitPane>
    </div>
  );
};

