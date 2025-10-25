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