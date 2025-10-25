
import Productlist from '@/Components/Productlist'
import Slider from '@/Components/Slider'
import Link from 'next/link'
import React from 'react'

const Home =async ({searchParams}:{searchParams:Promise<{catagory:string}>}) => {
    const catagory =  (await searchParams).catagory;
  return (
    <div>
      <Slider />
      <Productlist props={"homepage"} catagory={catagory} />
     
    </div>
  )
}

export default Home