"use client";
import { Product } from "@/app/type";
import { useAppDispatch } from "@/hooks/ReduxHook";
import { addToCard } from "@/Features/Card/CardSlice";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const Productinteraction = ({
  product,
  selectedsize,
  selectedcolor,
}: {
  product: Product;
  selectedsize: string;
  selectedcolor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const [quantity, setquantity] = useState(1);

  const handlechanges = (type: "size" | "color", value: string) => {
    const newsearchparams = new URLSearchParams(search.toString());
    newsearchparams.set(type, value);
    router.push(`${pathname}?${newsearchparams.toString()}`);
  };

  const handlequantity = (type: "increament" | "dicreament") => {
    if (type === "increament") {
      setquantity((prev) => prev + 1);
    } else {
      setquantity((prev) => prev - 1);
    }
  };

  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col gap-4">
      {/* size Selection */}
      <div>
        <p className="text-md">size:</p>
        <div className="flex gap-2 mt-2">
          {product.size.map((size) => (
            <button
              key={size}
              onClick={() => handlechanges("size", size)}
              className={`px-3 py-1 border ${
                selectedsize === size ? "border-blue-500" : "border-gray-300"
              } rounded hover:border-blue-500`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* color Selection */}
      <div>
        <p className="text-md">color:</p>
        <div className="flex gap-2 mt-2">
          {product.color.map((color) => (
            <button
              key={color}
              style={{ background: color }}
              onClick={() => handlechanges("color", color)}
              className={`px-3 py-3 border-1 transition-all duration-500 m-1 ${
                selectedcolor === color
                  ? "border-background scale-115"
                  : "border-gray-300"
              } rounded hover:border-blue-500`}
            ></button>
          ))}
        </div>
      </div>
      {/* Quantity  */}
      <div className="flex flex-col  gap-4">
        <p className="text-md">Quantity:</p>
        <div className="flex items-center gap-1 ">
          <button
            onClick={() => handlequantity("dicreament")}
            disabled={quantity === 1}
            className={`p-2 border border-background rounded-md outline-none active:scale-95 
              ${
                quantity === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-blue-500"
              }`}
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="mx-2"> {quantity} </span>
          <button
            onClick={() => handlequantity("increament")}
            className="p-2 border border-background rounded-md outline-none active:scale-95 hover:border-blue-500"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
       <Link href={`/card`}
       onClick={()=> dispatch(addToCard({
         ...product,
         quantity: quantity,
         selectedColor: selectedcolor,
         selectedSize: selectedsize || undefined,
       }))}
       className='text-white px-4 py-1.5 text-center mt-2 bg-blue-500 rounded  hover:opacity-80  transition-opacity'>
                <Plus className='inline-block mr-2 h-4 w-4'/>
                 Add to Card</Link>
         <Link href={`/card`} className='text-foreground px-4 py-1.5 mt-2 border text-center border-blue-500 rounded  hover:opacity-80  transition-opacity'>
                 <ShoppingCart className='inline-block mr-2 h-4 w-4'/>
                 Buy this time</Link>
    </div>
  );
};

export default Productinteraction;
