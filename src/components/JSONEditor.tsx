import { lazy, useEffect, useState } from 'react';

import loader from "@monaco-editor/loader";

import defaultjson from '../data/defaultjson';

const MonacoEditor = lazy(() => import("@monaco-editor/react"));

const leftLayoutCSS = {
  height: '100%',
  background: '#fafafa'
};

export default function JSONEditor() {
  const [jsonText, setJsonText] = useState(defaultjson);

  useEffect(() => {
    loader.init().then((monaco) => {
      // monaco.editor.defineTheme("night-owl", NightOwlTheme as unknown as any);
      console.log('Here is the monaco instance', monaco);
    });
  }, [])

  return (
    <div style={leftLayoutCSS} className='border-r'>
      <MonacoEditor
        theme="night-owl"
        height="100%"
        language=""
        defaultLanguage="json"
        defaultValue={jsonText}
        onChange={(value) => (value ? setJsonText(value) : null)}
        options={{
          renderValidationDecorations: "off",
        }}
      />
    </div>
  )
}
