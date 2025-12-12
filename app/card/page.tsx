'use client';

import { Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductInCart } from "../type";
import Image from "next/image";
import Link from "next/link";
import ShippingForm from "@/Components/ShippingForm";
import { useState } from "react";
import { Shippingfrominput } from "@/app/type";
import PaymentForm from "@/Components/PaymentForm";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHook";
import { useDispatch } from "react-redux";
import { removeFormCard } from "@/Features/Card/CardSlice";

const Page = () => {
  const search = useSearchParams();
  const router = useRouter();
  const TotalPrice = useAppSelector((state) => state.card.totalPrice)
  const dispatch = useAppDispatch();
   
  // select the cart items from the Redux store
  const productsInCart: ProductInCart[] = useAppSelector((state) => state.card.items);
  

  const activeStep = parseInt(search.get("step") || "1");

  // ✅ Correct state type
  const [shippingForm, setShippingForm] = useState<Shippingfrominput | null>(null);

  const steps = [
    { id: 1, name: "Shopping Cart" },
    { id: 2, name: "Shipping Address" },
    { id: 3, name: "Payment Method" },
  
  ];

  const cartproducts = productsInCart;
  
  

  return (
    <div>
      <h1 className="text-2xl text-center m-6">Your Shopping Cart</h1>

      {/* Steps */}
      <div className="flex justify-center items-center gap-6 mb-8 flex-wrap max-md:text-sm">
        {steps.map((st) => (
          <div
            key={st.id}
            className={`flex gap-2 justify-center items-center border-b-2 ${
              st.id === activeStep ? "border-blue-500" : "border-gray-500"
            } px-2`}
          >
            <div
              className={`w-10 h-10 rounded-full max-md:h-8 max-md:w-8 ${
                st.id === activeStep ? "bg-blue-500" : "bg-gray-500 opacity-70"
              } flex justify-center items-center mb-2`}
            >
              {st.id}
            </div>
            <span className="text-foreground">{st.name}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 items-start max-md:flex-col">
        {/* Step 1 - Cart Products */}
        {activeStep === 1 && (
          <div className="p-6 rounded shadow-md shadow-gray-700 w-140 max-md:w-full">
            <h2 className="text-md font-medium mb-4">Items in your Cart</h2>
            <div className="flex flex-col gap-4 border-t pt-4">
              {cartproducts.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center border-b-1 py-2 gap-4"
                >
                  <Link href={`/products/${product.id}?size=${product.selectedSize}&color=${product.selectedColor}`} className="flex gap-4 max-md:flex-col">
                    <div className="flex items-center max-md:justify-between gap-4">
                      <Image
                        src={product.image[product.selectedColor]}
                        alt={product.name}
                        width={92}
                        height={92}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <div className="flex gap-2 items-center">
                          <p className="text-sm text-gray-500">
                            Quantity: {product.quantity}
                          </p>
                          <p className="text-sm text-gray-500">
                            Color: {product.selectedColor}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {product.selectedSize}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="flex gap-2 max-md:flex-col justify-between items-center">
                    <span className="font-medium">${product.price}</span>
                    <Trash2 className="cursor-pointer text-red-500 px-1.5 py-1 text-xl h-9 w-9 rounded-2xl hover:bg-red-300"  onClick={ () => dispatch(removeFormCard({id:product.id,selectedColor:product.selectedColor,selectedSize:product.selectedSize}))}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 - Shipping Form */}
        {activeStep === 2 && <ShippingForm setshippingform={setShippingForm} />}

        {/* Step 3 - Payment */}
        {activeStep === 3 &&
          (shippingForm ? (

            <PaymentForm />
          ) : (
            <div>Please fill the shipping form first.</div>
          ))}

        {/* Card Details */}
        <div className="p-6 rounded shadow-md shadow-gray-700 w-96 max-md:w-full">
          <h2 className="text-md font-medium">Cart Details</h2>
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
            <span>{TotalPrice.toFixed(2)}</span>
          </div>

          {activeStep === 1 && (
            <button
              className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => router.push(`/card/?step=2`)}
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-8 justify-center items-center mt-10">
        {activeStep > 1 && (
          <button
            onClick={() => router.push(`/card?step=${activeStep - 1}`)}
            className="px-4 py-2 text-white bg-black dark:bg-white rounded hover:bg-gray-600 dark:hover:bg-gray-300 dark:text-black border-1 border-black"
          >
            Previous
          </button>
        )}

        <span className="text-gray-500">
          Step {activeStep} of {steps.length}
        </span>

        {activeStep < steps.length && (
          <button
            onClick={() => router.push(`/card?step=${activeStep + 1}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
