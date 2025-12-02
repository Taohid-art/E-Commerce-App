import { Product } from '@/app/type';
import React from 'react'

const PopularProduct = () => {
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
          Blue: "https://plus.unsplash.com/premium_photo-1714227363642-36dd630c6c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdCUyMHNhbWVpbWFnZSUyMHdpdGglMjBkaWZmZXJudCUyMGNvbG9yfGVufDB8fDB8fHww",
         Green: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
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
          Black: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
          White: "https://plus.unsplash.com/premium_photo-1677995700946-f6ea044f5291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3QlMjBzYW1laW1hZ2UlMjB3aXRoJTIwZGlmZmVybnQlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D"
        },
      },
      {
        id: 3,
        name: "Wooden Dining Table",
        description: "A sturdy wooden table with seating for six.",
        price: 299,
        catagory: "furnitures",
        size: ["6ft x 3ft", "5ft x 3ft"],
        color: ["Brown", "Dark Oak"],
        image: {
          Brown: "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=3ps3kEWGutdggpLGYC1i16HYrguqWU-hw_P9LOQJi-w=",
          side: "https://example.com/images/wooden-dining-table-side.jpg",
          back: "https://plus.unsplash.com/premium_photo-1750507177869-c1a2a359c3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwcHJvZHVjdCUyMHNhbWVpbWFnZSUyMHdpdGglMjBkaWZmZXJudCUyMGNvbG9yfGVufDB8fDB8fHww",
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
    <div>

    </div>
  )
}

export default PopularProduct