import React from 'react'
import Searchbar from './Searchbar'
import{ Bell, Home,  ShoppingCart} from 'lucide-react'
import Link from 'next/link'
import Cardicon from './Cardicon'
import ThemeToggle from './ThemeToggole'
const Nav = () => {
  return (
    <div className='w-full h-18 backdrop-blur-2xl border-b border-foreground/20 shadow-foreground/10 flex items-center justify-between sticky top-0 bg-background z-50'>
      <Link href='/' className='text-2xl font-bold ml-2 text-foreground'><h1 className='text-xl max-sm:text-lg'>YourShop</h1></Link>
      <div className='flex items-center justify-center mr-4 max-sm:mr-2 gap-5 max-sm:gap-2 max-sm:text-md'>
        <Searchbar  />
        <ThemeToggle />
        <Link href='/' className=''>
          <Home className='text-foreground' />
        </Link>
        <Bell className='text-foreground' />
        
         <Cardicon />
        <Link href='/login' className='bg-blue-500  text-white font-light text-lg px-3 py-1 rounded-md hover:opacity-80 transition-colors'>Login</Link>
      </div>
    </div>
  )
}

export default Nav