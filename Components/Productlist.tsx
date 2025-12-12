
import React from 'react'
import Catagory from './Catagory'
import { Product } from '@/app/type';
import Productcard from './Productcard';
import FilterProduct from '@/Components/FilterProduct';
import Link from 'next/link';

const Productlist = ({props, catagory}:{props:"productpage" | "homepage",catagory:string}) => {
  const products: Product[] = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    description: "A comfortable cotton shirt perfect for daily wear.",
    price: 25,
    catagory: "clothes",
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Green"],
    image: {
      Red: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
      Blue: "https://media.istockphoto.com/id/465485415/photo/blue-t-shirt-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlqZ3uDmzI-4uMaWZm3jwljVlH5XFGvhcCa0vpJY92k=",
     Green: "https://media.istockphoto.com/id/1209887384/photo/green-t-shirt-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=UWOaSesIHV-sfh8O7jZmwzGBa57OD2TezEy-OQUz5nM=",
    },
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling headphones with 20-hour battery life.",
    price: 99,
    catagory: "electronics",
    size: ["One Size"],
    color: ["Black", "White"],
    image: {
      Black: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBibHVldG9vdGh8ZW58MHx8MHx8fDA%3D",
      White: "https://images.unsplash.com/photo-1765279327575-bc9e453514dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdoaXRlJTIwYmx1ZXRvb3RofGVufDB8fDB8fHww"
    },
  },
  {
    id: 3,
    name: "Wooden Dining Table",
    description: "A sturdy wooden table with seating for six.",
    price: 299,
    catagory: "furnitures",
    size: ["6ft x 3ft", "5ft x 3ft"],
    color: ["Brown", "Dark"],
    image: {
      Brown: 'https://plus.unsplash.com/premium_photo-1744839107720-281b527a37d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdoaXRlJTIwV29vZGVuJTIwRGluaW5nJTIwVGFibGV8ZW58MHx8MHx8fDA%3D',
      Dark: 'https://plus.unsplash.com/premium_photo-1723672857304-36018af85340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMERpbmluZyUyMFRhYmxlJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D'
    },
  },
  {
    id: 4,
    name: "Toy Building Blocks Set",
    description: "A creative set of building blocks for kids aged 5 and up.",
    price: 19,
    catagory: "toys",
    size: ["One Size"],
    color: ["Multicolor"],
    image: {
      Multicolor: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
      side: "https://example.com/images/toy-building-blocks-side.jpg",
      back: "https://example.com/images/toy-building-blocks-back.jpg",
    },
  },
  {
    id: 5,
    name: "Designer Backpack",
    description: "A stylish backpack with multiple compartments.",
    price: 49,
    catagory: "clothes",
    size: ["One Size"],
    color: ["Black", "Grey"],
    image: {
      Black: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
      side: "https://example.com/images/designer-backpack-side.jpg",
      back: "https://example.com/images/designer-backpack-back.jpg",
    },
  },
];


  return (
    <div className="mb-16 mt-1 ">
      <Catagory />
      {props === "productpage" && <FilterProduct  />}
       <div className='w-full mt-5 px-3 flex flex-wrap justify-center gap-10 '>
       
      {products.map((item)=>(
        <Productcard key={item.id} products={item}/>
      ))}
      </div>
       <Link className='text-foreground text-center ' href={ catagory ? `/products/?catagory=${catagory}` :"/products"}>See More</Link>
    </div>
  )
}

export default Productlist