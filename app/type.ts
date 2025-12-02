import z from "zod"

export type Product = {
  id: number,
  name: string,
  description: string,
  price:number,
  catagory: string,
  size: string[],
  color: string[],
  image:Record<string, string>
}

export type ProductInCart = Product & {
quantity: number,
selectedColor: string,
selectedSize?: string,

}

 export const Shippingform = z.object({
  fullName:z.string().min(3,"Full Name must be at least 3 characters long"),
  email:z.string().email("Invalid email address"),
  phone:z.string().min(10,"Phone number must be at least 10 digits long"),
  address:z.string().min(5,"Address must be at least 5 characters long"),
  city:z.string().min(2,"City must be at least 2 characters long"),
})
export type Shippingfrominput = z.infer<typeof Shippingform>;

export const PaymentformSchema = z.object({
  cardName: z.string().min(3,"Cardholder name must be at least 3 characters Long"),
  cardNumber:z.string().min(16,"Card Number is Required").max(16,"Card Number must be 16 digits"),
  experyDate:z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/
,"Invalid expiry date format. Use MM/YY"),
  cvv:z.string().min(3,"cvv is required").max(3,"cvv must be 3 digits")
})
export type Paymentforminput = z.infer<typeof PaymentformSchema >;