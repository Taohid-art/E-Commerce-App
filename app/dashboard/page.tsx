import { Sidebar } from '@/Components/ui/sidebar'
import Appbarchart from '@/Components/Appbarchart'
import Piechart from '@/Components/Piechart'
import Areachart from '@/Components/Areachart'
import React from 'react'
import { Area } from 'recharts'
import LatestTransaction from '@/Components/LatestTransaction'

const page = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
       <div className="col-span-2 ">
        <Appbarchart />
       </div>
       <div className="col-span-1 border p-4 rounded-md shadow-sm">  
        <LatestTransaction />
       </div>
       <div className="col-span-1 ">
        <Piechart />
       </div>
       <div className="col-span-1 ">Test</div>
       <div className="col-span-2 ">
        <Areachart />
       </div>
       <div className="col-span-1">Test</div>
       
    </div>
  )
}

export default page