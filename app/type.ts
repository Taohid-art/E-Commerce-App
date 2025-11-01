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