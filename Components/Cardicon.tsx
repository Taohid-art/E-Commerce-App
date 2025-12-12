'use client'
import { useAppSelector } from '@/hooks/ReduxHook'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Cardicon = () => {
  const itemsInCard = useAppSelector((state) => state.card.items)
  return (
    <div>
        <Link href='/card' className='text-foreground relative font-medium max-sm:mr-2'>
        <span className='z-1 text-white max-md:text-xs absolute -top-4 -right-2.5 px-1.5 py-0.5 rounded-full bg-red-500 text-sm'>{itemsInCard.length}</span>
        <ShoppingCart className='inline mr-1 mb-1 z-10' />
        </Link>
    </div>
  )
}

export default Cardicon