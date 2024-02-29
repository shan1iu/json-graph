import { lazy, useEffect } from 'react';

import loader from "@monaco-editor/loader";
import { useStore } from '../stores';
import { Button } from 'antd';
import { getValidJson } from '../utils/tools';

const MonacoEditor = lazy(() => import("@monaco-editor/react"));

const leftLayoutCSS = {
  height: '100%',
  background: '#fafafa'
};

export default function JSONEditor() {
  const jsonInput = useStore((state: any) => state.jsonInput);
  const setJsonInput = useStore((state: any) => state.setJsonInput);
  const clearJsonInput = useStore((state: any) => state.clearJsonInput);

  useEffect(() => {
    loader.init().then((monaco) => {
      // monaco.editor.defineTheme("night-owl", NightOwlTheme as unknown as any);
      // console.log('Here is the monaco instance', monaco);
    });
  }, []);

  return (
    <div style={leftLayoutCSS} className='border-r'>
      <Button onClick={clearJsonInput}>Clear</Button>
      <pre className='text-sm'>
        {getValidJson(jsonInput) && JSON.stringify(getValidJson(jsonInput), null, 2)}
      </pre>
      <MonacoEditor
        theme="night-owl"
        height="100%"
        language="json"
        defaultLanguage="json"
        value={jsonInput}
        onChange={(value) => (value ? setJsonInput(value) : null)}
        options={{
          renderValidationDecorations: "off",
        }}
      />
    </div>
  )
}
