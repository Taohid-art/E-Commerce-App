import Productlist from '@/Components/Productlist'
import React from 'react'

const page =async ({searchParams}:{searchParams:Promise<{catagory:string}>}) => {
    const catagory =  (await searchParams).catagory;
  return (
    <div>
        <Productlist props={"productpage"} catagory={catagory} />
    </div>
  )
}

export default page