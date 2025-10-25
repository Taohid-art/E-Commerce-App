'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const FilterProduct = () => {
 
   const pathname = usePathname();
   const router = useRouter();
   const searchParams = useSearchParams();
   
 
   const handlefilter = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", slug);
     router.push(`${pathname}?${params.toString()}`, { scroll: false });
   };
  return (
    <div className='w-full flex justify-end items-center m-2 p-2 gap-2 '>
      <span >Sort by:</span>
      <select className='border-2 border-foreground p-2 rounded-md bg-background text-blue-500 outline-none' name="" id="" 
      onChange={(e)=>handlefilter(e.target.value)}
      >
        <option value="relevance" >Relevance</option>
        <option value="lowtohigh" >Price: Low to High</option>
        <option value="hightolow"  >Price: High to Low</option>
        <option value="newest" >Newest Arrivals</option>
      </select>
    </div>
  )
}

export default FilterProduct