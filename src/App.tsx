import { Divider as AntdDivider } from 'antd'
import { GithubOutlined, ReloadOutlined, ShareAltOutlined, DownloadOutlined, EditOutlined } from '@ant-design/icons'
import JSONGraphTree from './components/JSONGraphTree'
import Wrapper from './components/Wrapper'

function Divider() {
  return <AntdDivider type='vertical' className='bg-slate-100 h-[16px]' />
}

function App() {
  return (
    <div className='h-full min-h-screen flex flex-col'>
      <nav className='px-4 py-2 shadow bg-white flex justify-between items-center border-b'>
        <h1 className='px-2 py-1 text-xl lg:text-lg text-center font-bold cursor-default select-none'>JSON Tree Graph 🌳</h1>
        <div className='flex gap-1 items-center'>
          <GithubOutlined className='cursor-pointer' style={{ fontSize: 20 }} />
          <Divider />
          <ReloadOutlined className='cursor-pointer' style={{ fontSize: 20 }} />
          <Divider />
          <ShareAltOutlined className='cursor-pointer' style={{ fontSize: 20 }} />
          <Divider />
          <DownloadOutlined className='cursor-pointer' style={{ fontSize: 20 }} />
          <Divider />
          <EditOutlined className='cursor-pointer' style={{ fontSize: 20 }} />
        </div>
      </nav>
      {/* Graph */}
      <Wrapper />
    </div>
  )
}

export default App
