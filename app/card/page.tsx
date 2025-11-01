'use client'

import { Delete, DeleteIcon, Trash, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"
import { ProductInCart } from "../type";
import Image from "next/image";
import Link from "next/link";

const page = () => {
   const search = useSearchParams();
   const router = useRouter();
const activeStep = parseInt(search.get("step") || "1");

    const steps = [
        {id:1,name:"Shopping Card"},
        {id:2,name:"Shipping Address"},
        {id:3,name:"Payment Method"},
        {id:4,name:"Order Review"},
    ]  

    const cartproducts:ProductInCart[] = [
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
    quantity: 1,
    selectedColor: "Red",
    selectedSize: "XL",

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
    quantity: 1,
  selectedColor: "Black",
  selectedSize: "One Size",
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
    quantity: 1,
    selectedColor: "Brown",
    selectedSize: "6ft x 3ft",
  },
    ];
  return (
    <div>
        <h1 className='text-2xl text-center m-6'>Your  Shoping Card</h1>
        <div className='flex justify-center items-center gap-6 mb-8 flex-wrap max-md:text-sm'>
            {steps.map((st)=>(
                <div key={st.id} className={`flex gap-2 justify-center items-center border-b-2  ${st.id===activeStep ? 'border-blue-500' : 'border-gray-500'}   px-2`}>
                    <div className={`w-10 h-10 rounded-full max-md:h-8 max-md:w-8 ${st.id===activeStep ? 'bg-blue-500 ' : 'bg-gray-500 opacity-70'} flex justify-center items-center mb-2`}>{st.id}</div>
                    <span className='text-foreground'>{st.name}</span>
                </div>
            ))} 
        </div>
       
        <div className="flex justify-center gap-6 items-start max-md:flex-col">
            {activeStep === 1 && <div
            className="p-6  rounded shadow-md shadow-gray-700 w-140 max-md:w-full"
            >
                <h2 className="text-md font-medium mb-4">Items in your Cart</h2>
                <div className="flex flex-col gap-4 border-t pt-4">
                    {cartproducts.map((product)=>( <div key={product.id} className="flex justify-between items-center  border-b-1 py-2 gap-4">
                        <Link href={`/products/${product.id}`}>
                          <div className="flex items-center max-md:justify-between gap-4">
                            <Image src={`${product.image[product.selectedColor]}`} alt="Product 1" width={92} height={92} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <h3 className="font-medium">{product.name}</h3>
                                <div className=" flex justify-around gap-2 items-center ">
                                     <p className="text-sm  text-gray-500">Quantity: {product.quantity}</p>
                                <p className="text-sm text-gray-500">Color: {product.selectedColor}</p>
                                <p className="text-sm text-gray-500">Size: {product.selectedSize}</p>
                                </div>
                            </div>  
                        </div>
                        </Link>
                        < div className="flex  gap-2 max-md:flex-col  justify-between items-center">
                        <span className="font-medium">{product.price} $</span>
                        <Trash2 className="cursor-pointer text-red-500 px-1.5 py-1 text-xl h-9 w-9 rounded-2xl hover:bg-red-300" />
                        </div>
                    </div>))}   

                    
                   
                </div>
            </div>}


            <div className="p-6  rounded shadow-md shadow-gray-700 w-96 max-md:w-full">
                <h2 className="text-md font-medium">Card Details</h2>
                <div className="mt-4 flex justify-between gap-4">
                    <span>Subtotal:</span>
                    <span>$100.00</span>
                </div>
                <div className="mt-2 flex justify-between gap-4">
                    <span>Tax:</span>
                    <span>$8.00</span>
                </div>
                <div className="mt-2 flex justify-between gap-4 font-bold">
                    <span>Total:</span>
                    <span>$108.00</span>
                </div>
                {activeStep === 1 &&
                
                <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={()=>router.push(`/card/?step=2`)}
                >Proceed to Checkout</button>
                }
            </div>
         
        </div>

        <div className="flex gap-8 justify-center items-center mt-10">
            {activeStep > 1 && <button onClick={()=>router.push(`/card?step=${activeStep - 1}`)}   className="
      px-4 py-2 text-white 
      bg-black dark:bg-white 
      rounded 
      hover:bg-gray-600 dark:hover:bg-gray-300 
      dark:text-black
      border-1 border-black
    ">Previous</button>}
            <span className="text-gray-500">Step {activeStep} of {steps.length}</span>
            {activeStep < steps.length && <button onClick={()=>router.push(`/card?step=${activeStep + 1}`)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>}
        </div>
    </div>
  )
}

export default page