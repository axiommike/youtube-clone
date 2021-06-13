import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Topnav from '../components/topnav'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>YouTube Clone</title>
        <link rel="icon" href="/download.png" />
      </Head>
      
        {/* Header bar */}
       <Topnav/>
       <Sidebar/>
        {/* Sidebar */}
        {/* Scrolling category bar */}
        {/* Main Content */}
      

      
    </div>
  )
}
