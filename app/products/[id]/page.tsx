import { Product } from '@/app/type';
import Productinteraction from '@/Components/Productinteraction';
import Image from 'next/image'
import React from 'react'

const page = async  ({searchParams}:{searchParams:Promise<{color:string,size:string}>}) => {
  const {color,size} = await searchParams as {color:string,size:string};
    const product:Product = {
         id: 1,
    name: "Men's Casual Shirt",
    description: "A comfortable cotton shirt perfect for daily wear.",
    price: 25.90,
    catagory: "clothes",
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Green"],
    image: {
      Red: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
      Blue: "https://plus.unsplash.com/premium_photo-1714227363642-36dd630c6c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdCUyMHNhbWVpbWFnZSUyMHdpdGglMjBkaWZmZXJudCUyMGNvbG9yfGVufDB8fDB8fHww",
     Green: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
    }
    }
  return (
    <div>
        <h1 className='text-center text-2xl py-4 text-blue-500 font-medium'>Product Details Page</h1>
        <div className='flex flex-6 text-foreground gap-6 max-md:flex-col max-md:items-center max-md:px-4'>
          <div className='flex-2 relative aspect-3/2 w-full max-md:aspect-4/3 my-4 py-2 mx-auto'>
            <Image alt='Product Image' src={product.image[color]} fill className='object-contain'/>
          </div>
          <div className='flex-4 p-4'>  
            <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
            <p className='text-gray-600 mb-4'>{product.description}</p>
            <p className='text-2xl font-bold mb-4'>${product.price.toFixed(2)}</p>
            <Productinteraction product={product} selectedsize={size} selectedcolor={color} />
          </div>
        </div>
    </div>
  )
}

export default page