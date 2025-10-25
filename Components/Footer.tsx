import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full mt-2 grid grid-cols-4 max-sm:place-items-center gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 p-6 bg-foreground/10 text-foreground">
    
  <div className="flex flex-col  gap-2 max-sm:items-center ">
    <h2 className='text-md text-foreground'>YourShop</h2>
    <p className='text-sm text-foreground/70'>2025 YourShop</p>
    <p className='text-sm text-foreground/70'>All rights Reserved</p>
  </div>
  <div className="flex flex-col gap-2 max-sm:items-center">
    <p>Links</p>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/home'>Home</Link>
   
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/contact'>Contact</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/termsofservice'>Terms of service</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/privcepolicy'>Privacy policy</Link>
    
  </div>
   <div className="flex flex-col gap-2 max-sm:items-center">
    <p>Products</p>
   
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/products'>All Products</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/newarrival'>New Arrival</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/bestsellers'>Best Sellers</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/sell'>Sell</Link>
    
  </div>
  <div className="flex flex-col gap-2 max-sm:items-center">
    <p>Company</p>
   
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/about'>About</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/contact'>Contact</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/bestsellers'>Blog</Link>
    <Link className='text-sm cursor-pointer text-foreground/70 hover:text-foreground' href='/sell'>Affiliate Program</Link>
    
  </div>
    </div>
    
  )
}

export default Footer