import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Cardicon = () => {
  return (
    <div>
        <Link href='/cart' className='text-foreground relative font-medium'>
        <span className='z-1 absolute -top-6 -right-2.5 px-1.5 py-0.5 rounded-full bg-red-500 text-sm'>0</span>
        <ShoppingCart className='inline mr-1 mb-1 z-10' />
        </Link>
    </div>
  )
}

export default Cardicon