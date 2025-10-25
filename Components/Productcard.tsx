'use client'
import { Product } from '@/app/type';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const productcard = ({products}:{products:Product}) => {
  const item = products
  const handlechange=(value: string,type:"color"| "size")=>{
    setproducttype((prev)=>({
      ...prev,
      [type]:value
    }))
  }
  const [producttype, setproducttype] = useState({

    color: products.color[0],
    size: products.size[0]
  })
  return (
   
            <div key={item.id} className='w-64 max-sm:w-74 max-md:max-sm:w-74 border-1 border-foreground/20 rounded-lg overflow-hidden hover:shadow-lg flex flex-col gap-1 mb-4 bg-background'>
                <Link href={`/products/${item.id}/?size=${producttype.size}&color=${producttype.color}`} className='relative w-64 max-sm:w-74 max-md:max-sm:w-74  overflow-hidden h-68'>
                <Image alt='Product Image' src={item.image[producttype.color]}  fill  className='hover:scale-110 transition-all duration-300'/>
                </Link>
                <div className='p-2 flex flex-col  gap-2'>
                <h2 className='text-lg font-bold text-foreground line-clamp-1'>{item.name}</h2>
                <p className='text-foreground/70 line-clamp-2'>${item.description}</p>
                <div className='flex justify-between items-center '>
                  <div className='flex items-center'>
                    <span>Color:</span>
                    {item.color.map((clr, index)=>(
                      
                      
                      <button key={index} style={{backgroundColor:clr}} 
                      onClick={()=>handlechange(clr,"color")}
                      className={`w-5 p-2 h-5 border-1 cursor-pointer border-foreground/20 rounded-full mx-1 `}></button>
                    ))}
                  </div>
                  <select name="size" id="" onChange={(e)=>(handlechange(e.target.value,"size"))} className='border-2 border-foreground/20 rounded-md px-1 bg-background text-foreground'>
                    {item.size.map((sz, index)=>(
                      <option className='text-foreground' key={index} value={sz}>{sz}</option>
                    ))}
                  </select>
                </div>
               <div className='flex justify-between items-center'>
                <span className='text-lg font-bold text-foreground'>${item.price.toFixed(2)}</span>
                 <Link href={`/card`} className='text-white text-center px-4 py-1.5 mt-2 bg-blue-500 rounded  hover:opacity-80  transition-opacity'>
                 <ShoppingCart className='inline-block mr-2 h-4 w-4'/>
                 Add to Card</Link>
               </div>
                </div>
            </div>
        
    
  )
}

export default productcard