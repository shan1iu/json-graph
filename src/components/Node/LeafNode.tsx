// ["bigint", "boolean", "number", "string"]

function LeafNode({ type, value }: { type: string, value: bigint | boolean | number | string }) {
  return (
    <div className="border rounded min-w-[100px] max-w-[250px]" style={{ width: 'max-content' }}>
      <div className="px-1 text-sm text-gray-500 border-b bg-slate-100 rounded-tl rounded-tr">
        <span>{type}</span>
      </div>
      <div className="px-2 py-1">
        <span>{`${value}`}</span>
      </div>
    </div>
  )
}

// 字符串
export function StringNode(value: string) {
  return <LeafNode type="string" value={value} />
}

// 数字
export function NumberNode(value: number) {
  return <LeafNode type="number" value={value} />
}

// 布尔
export function BooleanNode(value: boolean) {
  return <LeafNode type="boolean" value={value} />
}

// BigInt
export function BigIntNode(value: bigint) {
  return <LeafNode type="bigint" value={value} />
}





